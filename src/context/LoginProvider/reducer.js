import * as types from './types';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';

export const reducer = (state, action) => {
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Users');

  switch (action.type) {
    case types.CREATEUSER: {
      addDoc(useCollactionRef, action.data);
      console.log(action.data);
      return { ...state };
    }
  }
  return { ...state };
};
