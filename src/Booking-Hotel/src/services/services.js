import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from './config';

export const getData = async (docName, conditionList = [], id) => {
  if (id) {
    const docRef = doc(db, docName, id);
    const docSnap = await getDoc(docRef);

    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  }

  const result = [];
  const docRef = collection(db, docName);
  const conditions = conditionList.map((condition) =>
    where(condition.field, condition.operator, condition.value)
  );
  const q = query(docRef, ...conditions);
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });

  return result;
};

export const addData = async (docName, data, id) => {
  if (id) {
    try {
      await setDoc(doc(db, docName, id), data);
      return { id: id, ...data };
    } catch (error) {
      return null;
    }
  }

  const docRef = await addDoc(collection(db, docName), data);

  return { id: docRef.id, ...data };
};
