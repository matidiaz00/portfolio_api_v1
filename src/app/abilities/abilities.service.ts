import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

@Injectable()
export class AbilitiesService {

  collName: string = 'abilities';
  collRef: any;

  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {
    this.collRef = this.firebase.db.collection(this.collName)
  }

  async findAll() {
    let all_data: any;
    await this.getCategories()
      .then(
        async (all_data_without_itemsAndChildrens) => {
          await this.getItems(all_data_without_itemsAndChildrens)
            .then(
              async (all_data_without_Childrens) => {
                await this.getChildrens(all_data_without_Childrens)
                  .then(
                    (data) => all_data = data
                  );
              }
            );
        }
      ).catch((err: Error) => {
        throw new HttpException({
          message_general: 'mensaje de error para usuario general escrito por matidiaz',
          message_developer: 'mensaje de error para el desarrollador escrito por matidiaz',
          message_client: 'mensaje de error para el cliente escrito por matidiaz',
          error: err
        }, HttpStatus.INTERNAL_SERVER_ERROR);
      });
    return all_data
  }

  async getCategories() {
    const snapshot = await this.collRef.get();
    let categoriesDoc = [];
    snapshot.forEach((category: any) => {
      let categoryData = category.data();
      categoryData['id'] = category.id;
      categoryData['items'] = [];
      categoriesDoc.push(categoryData);
    });
    const categories = await Promise.all(categoriesDoc)
    return categories
  }

  async getItems(all_data_without_itemsAndChildrens: Array<any>) {
    let itemsDoc = [];
    for await (let data of all_data_without_itemsAndChildrens) {
      if (data.id) {
        const itemSnapshot = await this.collRef.doc(data.id).collection('items').get();
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
    const items = await Promise.all(itemsDoc)
    return items
  }

  async getChildrens(all_data_without_Childrens: Array<any>) {
    let all_data = [];
    for await (let data of all_data_without_Childrens) {
      for await (let item of data.items) {
        let newItemsChildren = [];
        if (data.id && item.id) {
          const itemSnapshot = await this.collRef.doc(data.id).collection('items').doc(item.id).collection('childrens').get();
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
    return all_data
  }

}
