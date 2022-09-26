import * as types from './types';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';

export const reducer = (state, action) => {
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Events');

  switch (action.type) {
    case types.SETNAMELEAGUE: {
      console.log(action.payload);
      return { ...state, Email: action.payload };
    }

    case types.SETNAMEEVENT: {
      console.log(action.payload);
      return { ...state, Period: action.payload };
    }

    case types.SETDESCRIPTIONEVENT: {
      console.log(action.payload);
      return { ...state, Registration: action.payload };
    }

    case types.REGISTEREVENTDB: {
      addDoc(useCollactionRef, state);
      return { ...state };
    }
  }
  return { ...state };
};
