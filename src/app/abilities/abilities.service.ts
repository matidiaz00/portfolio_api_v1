import { CustomError } from '../../models/error.model';
import { db } from '../../firebase';

const collRef = db.collection('abilities')

export const findAll = async (): Promise<any> => {
    let all_data: any;
    await getCategories()
      .then(
        async (all_data_without_itemsAndChildrens) => {
          await getItems(all_data_without_itemsAndChildrens)
            .then(
              async (all_data_without_Childrens) => {
                await getChildrens(all_data_without_Childrens)
                  .then((data) => all_data = data )
                  .catch((err: Error) => new CustomError(500, err) );;
              }
            ).catch((err: Error) => new CustomError(500, err) );;
        }
      ).catch((err: Error) => new CustomError(500, err) );
    return all_data
}

const getCategories = async (): Promise<any> => {
    const snapshot = await collRef.get();
    let categoriesDoc: any = [];
    snapshot.forEach((category: any) => {
      let categoryData = category.data();
      categoryData['id'] = category.id;
      categoryData['items'] = [];
      categoriesDoc.push(categoryData);
    });
    if (categoriesDoc) {
      const categories = await Promise.all(categoriesDoc)
      return categories
    } else new CustomError(500, 'No hay colecciones en "abilities"')
}

const getItems = async (all_data_without_itemsAndChildrens: Array<any>): Promise<any> => {
    let itemsDoc = [];
    for await (let data of all_data_without_itemsAndChildrens) {
      if (data.id) {
        const itemSnapshot = await collRef.doc(data.id).collection('items').get();
        let newData = data;
        if (!itemSnapshot.empty) {
          itemSnapshot.forEach((item: any) => {
            const itemData = item.data();
            itemData['id'] = item.id;
            itemData['items'] = [];
            newData.items.push(itemData)
          });
        }
        itemsDoc.push(newData)
      }
    }
    if (itemsDoc) {
      const items = await Promise.all(itemsDoc)
      return items
    } else new CustomError(500, 'Hubo un problema obtener "items/colecciones" de los documentos de "abilities"')
}

const getChildrens = async (all_data_without_Childrens: Array<any>): Promise<any> => {
    let all_data = [];
    for await (let data of all_data_without_Childrens) {
      for await (let item of data.items) {
        let newItemsChildren: any = [];
        if (data.id && item.id) {
          const itemSnapshot = await collRef.doc(data.id).collection('items').doc(item.id).collection('childrens').get();
          if (!itemSnapshot.empty) {
            itemSnapshot.forEach((children: any) => {
              const childrenData = children.data();
              childrenData['id'] = children.id;
              childrenData['items'] = [];
              newItemsChildren.push(childrenData)
            });
          }
        }
        item.items.push(newItemsChildren)
      }
      all_data.push(data)
    }
    if (all_data.length === 0) return all_data
    else new CustomError(500, 'Hubo un problema obtener colecciones "childrends"')
}