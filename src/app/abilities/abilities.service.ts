import { CustomError } from './../../models/error.model';
import { db } from '../../firebase';
import { DataType } from '../../models/abilities.model';

const collRef = db.collection('abilities')

export const findAll = async (): Promise<DataType[]> => {
    let all_data: Promise<DataType[]>;
    await getCategories()
      .then(
        async (all_data_without_itemsAndChildrens: any) => {
          return await getItems(all_data_without_itemsAndChildrens)
            .then(
              async (all_data_without_Childrens: any) => {
                return await getChildrens(all_data_without_Childrens)
                  .then((data: any) => all_data = Promise.resolve(data))
              })
        })
    return all_data
}

const getCategories = async (): Promise<DataType[] | CustomError> => {
    const snapshot = await collRef.get();
    let categoriesDoc: DataType[] = [];
    snapshot.forEach((category: any) => {
      let categoryData: DataType = category.data();
      categoryData['id'] = category.id;
      categoryData['items'] = [];
      categoriesDoc.push(categoryData);
    });
    if (categoriesDoc) {
      return await Promise.all(categoriesDoc)
    } else {
      return new CustomError(500, `No hay colecciones en 'abilities'`)
    }
}

const getItems = async (all_data_without_itemsAndChildrens: DataType[]): Promise<DataType[] | CustomError> => {
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
      return Promise.all(itemsDoc)
    } else {
      return new CustomError(500, `Hubo un problema obtener 'items/colecciones' de los documentos de 'abilities'`)
    }
}

const getChildrens = async (all_data_without_Childrens: Array<any>): Promise<DataType[] | CustomError> => {
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
    if (all_data.length === 0) {
      return await Promise.all(all_data)
    } else {
      return new CustomError(500, `Hubo un problema obtener colecciones 'childrends'`)
    }
}