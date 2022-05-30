import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { DataInterface } from '../abilities.interface';

@Injectable()
export class ChildrensService {

  collName: string = 'abilities';
  collItemName: string = 'items';
  collChildrenName: string = 'childrens';
  collRef: any;

  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {
    this.collRef = this.firebase.db.collection(this.collName)
  }

  async create(category_id: string, item_id: string, createDto: DataInterface) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id).collection(this.collChildrenName).doc();
    await docRef.set(createDto);
    const doc = await docRef.get();
    const res = doc.data();
    res['id'] = doc.id;
    return res;
  }

  async findAll(category_id: string, item_id: string) {
    const collRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id).collection(this.collChildrenName);
    const snapshot = await collRef.get();
    let data = [];
    snapshot.forEach(
      (doc: any) => {
        const res = doc.data();
        res['id'] = doc.id;
        data.push(res)
      }
    );
    return data
  }

  async findOne(category_id: string, item_id: string, children_id: string) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id).collection(this.collChildrenName).doc(children_id);
    const doc = await docRef.get();
    if (!doc.exists) return { message: `El documento #${children_id} no existe en: /abilities/categories/${category_id}/${this.collItemName}/${item_id}/${this.collChildrenName}.` };
    else {
      const res = doc.data();
      res['id'] = doc.id;
      return res;
    }
  }

  async update(category_id: string, item_id: string, children_id: string, updateDto: DataInterface) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id).collection(this.collChildrenName).doc(children_id);
    await docRef.set(updateDto);
    const doc = await docRef.get();
    if (!doc.exists) return { message: `El documento #${children_id} no existe en: /abilities/categories/${category_id}/${this.collItemName}/${item_id}/${this.collChildrenName}.` };
    else {
      const res = doc.data();
      res['id'] = doc.id;
      return res;
    }
  }

  async remove(category_id: string, item_id: string, children_id: string) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id).collection(this.collChildrenName).doc(children_id);
    const res = await docRef.delete();
    if (res) return { message: `El documento #${children_id} se eliminó exitosamente de: /abilities/categories/${category_id}/${this.collItemName}/${item_id}/${this.collChildrenName}.` };
    else return { message: `Error al intentar eliminar el documento #${children_id}: /abilities/categories/${category_id}/${this.collItemName}/${item_id}/${this.collChildrenName}.` };
  }
  
}
