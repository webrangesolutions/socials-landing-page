import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, where } from 'firebase/firestore/lite';

import { firestore } from "../firebase.config";
import { Link, useParams } from 'react-router-dom';
export const saveContacts = async (data) => {
  await setDoc(doc(firestore, "contactInfo", `${Date.now()}`), data, {
    merge: true,
  });
};


