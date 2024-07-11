import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from '../firebase/client';

export const getProducts = async (idCategory) => {
    const productsCollection = collection(db, "productos");
    let q;

    if (idCategory) {
        q = query(productsCollection, where("category", "==", idCategory));
    } else {
        q = productsCollection;
    }

    try {
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return products;
    } catch (error) {
        throw new Error("No hay datos");
    }
}

export const getItem = async (id) => {
    const itemDoc = doc(db, "productos", id);

    try {
        const itemSnapshot = await getDoc(itemDoc);
        if (itemSnapshot.exists()) {
            return { id: itemSnapshot.id, ...itemSnapshot.data() };
        } else {
            throw new Error("No hay datos");
        }
    } catch (error) {
        throw new Error("No hay datos");
    }
}