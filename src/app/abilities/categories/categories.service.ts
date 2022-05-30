import { Injectable } from '@nestjs/common';
import { FirebaseAdmin, InjectFirebaseAdmin } from 'nestjs-firebase';
import { DataInterface } from './../abilities.interface';

@Injectable()
export class CategoriesService {

  collName: string = 'abilities';
  collRef: any;

  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {
    this.collRef = this.firebase.db.collection(this.collName)
  }

  async create(createDto: DataInterface) {
    const docRef = this.collRef.doc();
    await docRef.set(createDto);
    const newDocRef = this.collRef.doc(docRef.id);
    const newDoc = await newDocRef.get();
    const res = newDoc.data();
    res['id'] = newDoc.id;
    return res;
  }

  async findAll() {
    const snapshot = await this.collRef.get();
    let data = [];
    snapshot.forEach((doc: any) => {
      const res = doc.data();
      res['id'] = doc.id;
      data.push(res)
    });
    return data
  }

  async findOne(category_id: string) {
    const docRef = this.collRef.doc(category_id);
    const doc = await docRef.get();
    if (!doc.exists) return { message: `El documento #${category_id} no existe en: /abilities/categories".` };
    else {
      const res = doc.data();
      res['id'] = doc.id;
      return res;
    }
  }

  async update(category_id: string, updateDto: DataInterface) {
    const docRef = this.collRef.doc(category_id);
    await docRef.set(updateDto);
    const doc = await docRef.get();
    if (!doc.exists) return { message: `El documento #${category_id} no existe en: /abilities/categories".` };
    else {
      const res = doc.data();
      res['id'] = doc.id;
      return res;
    }
  }

  async remove(category_id: string) {
    const docRef = this.collRef.doc(category_id);
    const res = await docRef.delete();
    if (res) return { message: `El documento #${category_id} se eliminó exitosamente de: /abilities/categories".` };
    else return { message: `Error al intentar eliminar el documento #${category_id} de: /abilities/categories".` };
  }

}
