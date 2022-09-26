import * as types from './types';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';

export const reducer = (state, action) => {
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Mandates');

  switch (action.type) {
    case types.SETNAMEEVENT: {
      console.log(action.payload);
      return { ...state, Period: action.payload };
    }

    case types.SETNAMEMANDATE: {
      console.log(action.payload);
      return { ...state, Registration: action.payload };
    }

    case types.SETDESCRIPTIONMANDATE: {
      console.log(action.payload);
      return { ...state, Registration: action.payload };
    }

    case types.REGISTERMANDATEDB: {
      addDoc(useCollactionRef, state);
      return { ...state };
    }
  }
  return { ...state };
};
