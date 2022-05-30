import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';

interface DataInterface {
  title: string;
  description: string;
  order: number;
}

@Injectable()
export class ItemsService {

  collName: string = 'abilities';
  collItemName: string = 'items';
  collRef: any;

  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {
    this.collRef = this.firebase.db.collection(this.collName)
  }

  async create(category_id: string, createDto: DataInterface) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc();
    await docRef.set(createDto);
    const doc = await docRef.get();
    const res = doc.data();
    res['id'] = doc.id;
    return res;
  }

  async findAll(category_id: string) {
    const collRef = this.collRef.doc(category_id).collection(this.collItemName);
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

  async findOne(category_id: string, item_id: string) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id);
    const doc = await docRef.get();
    if (!doc.exists) return { message: `El documento #${item_id} no existe en: /abilities/categories/${category_id}/${this.collName}".` };
    else {
      const res = doc.data();
      res['id'] = doc.id;
      return res;
    }
  }

  async update(category_id: string, item_id: string, updateDto: DataInterface) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id);
    await docRef.set(updateDto);
    const doc = await docRef.get();
    if (!doc.exists) return { message: `El documento #${item_id} no existe en: /abilities/categories/${category_id}/${this.collName}".` };
    else {
      const res = doc.data();
      res['id'] = doc.id;
      return res;
    }
  }

  async remove(category_id: string, item_id: string) {
    const docRef = this.collRef.doc(category_id).collection(this.collItemName).doc(item_id);
    const res = await docRef.delete();
    if (res) return { message: `El documento #${item_id} se eliminó exitosamente de: /abilities/categories/${category_id}/${this.collName}".` };
    else return { message: `Error al intentar eliminar el documento #${item_id}: /abilities/categories/${category_id}/${this.collName}".` };
  }
  
}
