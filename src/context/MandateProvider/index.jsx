import P from 'prop-types';
import { useReducer } from 'react';

import { data } from './data';
import { reducer } from './reducer';
import { Mandate } from './context';

export const MandateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <Mandate.Provider value={{ state, dispatch }}>{children}</Mandate.Provider>
  );
};

MandateProvider.propTypes = {
  children: P.node,
};
