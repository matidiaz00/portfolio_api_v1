import { CustomError } from '../../../models/error.model';
import { db } from '../../../firebase';
import { DataInterface } from '../abilities.interface';

const collName: string = 'abilities';
const collItemName: string = 'items';

let collRef: any = db.collection(collName);

export const create = async (category_id: string, createDto: DataInterface): Promise<any> => {
    const docRef = collRef.doc(category_id).collection(collItemName).doc();
    await docRef.set(createDto);
    const doc = await docRef.get();
    const res = doc.data();
    res['id'] = doc.id;
    return res;
}

export const findAll = async (category_id: string): Promise<any> => {
    const collRef2 = collRef.doc(category_id).collection(collItemName);
    const snapshot = await collRef2.get();
    let data: any = [];
    snapshot.forEach(
        (doc: any) => {
            const res = doc.data();
            res['id'] = doc.id;
            data.push(res)
        }
    );
    return data
}

export const findOne = async (category_id: string, item_id: string): Promise<any> => {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id);
    const doc = await docRef.get();
    if (!doc.exists) return new CustomError(500, `El documento #${item_id} no existe en: /abilities/categories/${category_id}/${collName}`)
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
}

export const update = async (category_id: string, item_id: string, updateDto: DataInterface): Promise<any> => {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id);
    await docRef.set(updateDto);
    const doc = await docRef.get();
    if (!doc.exists) return new CustomError(500, `El documento #${item_id} no existe en: /abilities/categories/${category_id}/${collName}`)
    else {
        const res = doc.data();
        res['id'] = doc.id;
        return res;
    }
}

export const remove = async (category_id: string, item_id: string): Promise<any> => {
    const docRef = collRef.doc(category_id).collection(collItemName).doc(item_id);
    const res = await docRef.delete();
    if (res) return { message: `El documento #${item_id} se eliminó exitosamente de: /abilities/categories/${category_id}/${collName}".` };
    else return new CustomError(500, `Error al intentar eliminar el documento #${item_id}: /abilities/categories/${category_id}/${collName}".`)
}