import { db } from "../../../firebase";
import { DataInterface } from "../abilities.interface";
import { CustomError } from "../../../models/error.model";

const collName: string = 'abilities';
let collRef: any = db.collection(collName);

export const create = async (createDto: DataInterface): Promise<any> => {
    const docRef = collRef.doc();
    await docRef.set(createDto);
    const newDocRef = collRef.doc(docRef.id);
    const newDoc = await newDocRef.get();
    const res = newDoc.data();
    res['id'] = newDoc.id;
    return res;
}

export const findAll = async (): Promise<any> => {
    const snapshot = await collRef.get();
    let data: any = [];
    snapshot.forEach((doc: any) => {
        const res = doc.data();
        res['id'] = doc.id;
        data.push(res)
    });
    return data
}

export const findOne = async (category_id: string): Promise<any> => {
    const docRef = collRef.doc(category_id);
    const doc = await docRef.get();
    if (!doc.exists) return new CustomError(500, `El documento #${category_id} no existe en: /abilities/categories".` );
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
}

export const update = async (category_id: string, updateDto: DataInterface): Promise<any> => {
    const docRef = collRef.doc(category_id);
    await docRef.set(updateDto);
    const doc = await docRef.get();
    if (!doc.exists) return new CustomError(500, `El documento #${category_id} no existe en: /abilities/categories".` );
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
}

export const remove = async (category_id: string): Promise<any> => {
    const docRef = collRef.doc(category_id);
    const res = await docRef.delete();
    if (res) return { message: `El documento #${category_id} se eliminó exitosamente de: /abilities/categories".` };
    else return new CustomError(500, `Error al intentar eliminar el documento #${category_id} de: /abilities/categories".` );
}