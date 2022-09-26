import * as types from './types';
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';

export const reducer = (state, action) => {
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Users');

  switch (action.type) {
    case types.SETNAME: {
      console.log(action.payload);
      return { ...state, Name: action.payload };
    }

    case types.SETEMAIL: {
      console.log(action.payload);
      return { ...state, Email: action.payload };
    }

    case types.SETSTUDENTPUC: {
      console.log(action.payload);
      return { ...state, StudentPuc: action.payload };
    }

    case types.SETCELL: {
      console.log(action.payload);
      return { ...state, Cell: action.payload };
    }

    case types.SETFACULTY: {
      console.log(action.payload);
      return { ...state, Faculty: action.payload };
    }

    case types.SETCOURCE: {
      console.log(action.payload);
      return { ...state, Course: action.payload };
    }

    case types.SETPERIOD: {
      console.log(action.payload);
      return { ...state, Period: action.payload };
    }

    case types.SETREGISTRATION: {
      console.log(action.payload);
      return { ...state, Registration: action.payload };
    }

    case types.SETTYPE: {
      const docRef = doc(useCollactionRef, action.Id);
      const data = {
        Type: action.payload,
      };
      setDoc(docRef, data, { merge: true })
        // eslint-disable-next-line
        .then((docRef) => {
          console.log('Entire Document has been updated successfully');
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });

      return { ...state, Type: action.payload };
    }

    case types.REGISTERUSERDB: {
      addDoc(useCollactionRef, state);
      return { ...state };
    }
  }
  return { ...state };
};
