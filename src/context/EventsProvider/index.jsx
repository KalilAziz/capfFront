import P from 'prop-types';
import { useReducer } from 'react';

import { data } from './data';
import { reducer } from './reducer';
import { Events } from './context';

export const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <Events.Provider value={{ state, dispatch }}>{children}</Events.Provider>
  );
};

EventsProvider.propTypes = {
  children: P.node,
};
