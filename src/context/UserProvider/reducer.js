import * as types from './types';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';

export const reducer = (state, action) => {
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Users');
  console.log(state);
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

    case types.REGISTERUSERDB: {
      addDoc(useCollactionRef, state);
      return { ...state };
    }
  }
  return { ...state };
};
