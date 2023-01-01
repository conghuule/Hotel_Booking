import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from './config';

export const getData = async ({
  docName,
  id,
  conditionList = [],
  limitNumber = 100,
  orderByField,
}) => {
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

  const q = orderByField
    ? query(docRef, ...conditions, limit(limitNumber), orderBy(orderByField))
    : query(docRef, ...conditions, limit(limitNumber));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    result.push({ id: doc.id, ...doc.data() });
  });

  return result;
};

export const addData = async ({ docName, data, id }) => {
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

export const addFile = async ({ file, folder = '' }) => {
  const storageRef = ref(storage, `${folder}/${file.name}`);

  try {
    console.log(file);
    const res = await uploadBytes(storageRef, file);

    return getDownloadURL(res.ref);
  } catch (error) {
    console.log(error);
    return null;
  }
};
