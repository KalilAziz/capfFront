import * as types from './types';
export const setNameUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETNAME, payload: dataUser });
};

export const setEmailUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETEMAIL, payload: dataUser });
};

export const setStudentPucUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETSTUDENTPUC, payload: dataUser });
};

export const setCellUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETCELL, payload: dataUser });
};

export const setFacultyUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETFACULTY, payload: dataUser });
};

export const setCourseUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETCOURCE, payload: dataUser });
};

export const setPeriodUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETPERIOD, payload: dataUser });
};

export const setRegistratioUser = (dispatch, dataUser) => {
  dispatch({ type: types.SETREGISTRATION, payload: dataUser });
};

export const setRegistrationUserDb = (dispatch) => {
  dispatch({ type: types.REGISTERUSERDB });
};
