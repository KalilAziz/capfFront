import * as types from './types';
export const Create = (dispatch, dataUser, table) => {
  dispatch({ type: types.CREATE, data: dataUser, table: table });
};
