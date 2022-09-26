import * as Styled from './styles';
/* eslint-disable */
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { setType } from '../../../context/UserProvider/actions';
import { LoginContext } from '../../../context/UserProvider/context';
import { useContext } from 'react';

export const LeagueAndEvent = ({ user }) => {
  const { dispatch } = useContext(LoginContext);
  const [status, setStatus] = useState('');
  const [visible, setVisible] = useState(false);
  console.log(visible);

  useEffect(() => {
    if (status) setType(dispatch, status, user.Id);
  }, [status]);

  console.log(user.Events);
  console.log(user.Events.Description);
  console.log(user.Events.Mandate);

  return (
    <Styled.Container>
      <span onClick={() => setVisible(!visible)}>
        {user.Name} - {user.Status}
        {!visible && <AiOutlineCaretDown />}
        {visible && <AiFillCaretUp />}
      </span>

      <Styled.Info visible={visible}>
        <span>Sigla: {user.Initials}</span>
        <span>Orientador: {user.Oriented}</span>
        <span>Orientador: {}</span>
        <span>
          Alterar status:
          <select onChange={(e) => setStatus(e.target.value)}>
            <option defaultValue=""></option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </span>
      </Styled.Info>
    </Styled.Container>
  );
};
