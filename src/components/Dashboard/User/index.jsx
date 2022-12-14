import * as Styled from './styles';
/* eslint-disable */
import { AiOutlineCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { setType } from '../../../context/UserProvider/actions';
import { LoginContext } from '../../../context/UserProvider/context';
import { useContext } from 'react';

export const User = ({ user }) => {
  const { dispatch } = useContext(LoginContext);
  const [status, setStatus] = useState('');
  const [visible, setVisible] = useState(false);
  console.log(visible);

  useEffect(() => {
    if (status) setType(dispatch, status, user.Id);
  }, [status]);

  return (
    <Styled.Container>
      <span onClick={() => setVisible(!visible)}>
        {user.Name} - {user.Type}
        {!visible && <AiOutlineCaretDown />}
        {visible && <AiFillCaretUp />}
      </span>

      <Styled.Info visible={visible}>
        <span>Email: {user.Email}</span>
        <span>Celular: {user.Cell}</span>
        <span>Faculdade: {user.Faculty}</span>
        <span>Curso: {user.Course}</span>
        <span>Período: {user.Period}</span>
        <span>Matrícula: {user.Registration}</span>
        <span>
          Alterar status:
          <select onChange={(e) => setStatus(e.target.value)}>
            <option defaultValue=""></option>
            <option value="Aluno">Aluno</option>
            <option value="Administrador">Administrador</option>
            <option value="Colaborador">Colaborador</option>
          </select>
        </span>
      </Styled.Info>
    </Styled.Container>
  );
};
