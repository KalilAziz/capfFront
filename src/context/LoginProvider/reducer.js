import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.DELETE: {
      console.log('Deletado');
      return { ...state };
    }
  }
  return { ...state };
};
