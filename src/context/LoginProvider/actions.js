import * as types from './types';
export const CreateUSer = (dispatch, dataUser) => {
  dispatch({ type: types.CREATEUSER, data: dataUser });
};
