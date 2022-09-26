import * as types from './types';
export const setInitialsLeague = (dispatch, dataLeague) => {
  console.log(123123);
  dispatch({ type: types.SETINICIALSLEAGUE, payload: dataLeague });
};

export const setNameLeague = (dispatch, dataLeague) => {
  dispatch({ type: types.SETNAMELEAGUE, payload: dataLeague });
};

export const setObjectiveLeague = (dispatch, dataLeague) => {
  dispatch({ type: types.SETOBJECTIVELEAGUE, payload: dataLeague });
};

export const setOrientedLeague = (dispatch, dataLeague) => {
  dispatch({ type: types.SETORIENTEDLEAGUE, payload: dataLeague });
};

export const setRegisterLeagueDb = (dispatch) => {
  dispatch({ type: types.REGISTERLEAGUEDB });
};
