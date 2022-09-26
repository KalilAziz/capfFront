import * as types from './types';

export const setNameLeague = (dispatch, dataLeague) => {
  dispatch({ type: types.SETNAMELEAGUE, payload: dataLeague });
};

export const setNameEvent = (dispatch, dataEvent) => {
  dispatch({ type: types.SETNAMEEVENT, payload: dataEvent });
};

export const setDescriptionEvent = (dispatch, dataEvent) => {
  dispatch({ type: types.SETDESCRIPTIONEVENT, payload: dataEvent });
};

export const setRegisterEventDb = (dispatch) => {
  dispatch({ type: types.REGISTEREVENTDB });
};
