import * as types from './types';

export const setNameEvent = (dispatch, dataEvent) => {
  dispatch({ type: types.SETNAMEEVENT, payload: dataEvent });
};

export const setNameMandate = (dispatch, dataMandate, Id) => {
  dispatch({ type: types.SETNAMEMANDATE, payload: dataMandate, Id: Id });
};

export const setDescriptionMandate = (dispatch, dataMandate, Id) => {
  dispatch({ type: types.SETDESCRIPTIONMANDATE, payload: dataMandate, Id: Id });
};

export const setRegisterMandateDb = (dispatch) => {
  dispatch({ type: types.REGISTERMANDATEDB });
};
