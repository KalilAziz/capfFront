import * as types from './types';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';

export const reducer = (state, action) => {
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Leagues');

  switch (action.type) {
    case types.SETINICIALSLEAGUE: {
      console.log(action.payload);
      return { ...state, InitialsLeague: action.payload };
    }

    case types.SETNAMELEAGUE: {
      console.log(action.payload);
      return { ...state, NameLeague: action.payload };
    }

    case types.SETOBJECTIVELEAGUE: {
      console.log(action.payload);
      return { ...state, ObjectiveLeague: action.payload };
    }

    case types.SETORIENTEDLEAGUE: {
      console.log(action.payload);
      return { ...state, OrientedLeague: action.payload };
    }

    case types.REGISTERLEAGUEDB: {
      addDoc(useCollactionRef, state);
      console.log('cria league');
      return { ...state };
    }
  }
  return { ...state };
};
