import * as Styled from './styles';
import { HeadingDashboard } from '../HeadingDashboard';
import { FaUserAlt } from 'react-icons/fa';
import { firebaseApp } from '../../../config/firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { User } from '../User';

const db = getFirestore(firebaseApp);
const useCollactionRef = collection(db, 'Users');

export const UsersDashboard = () => {
  // eslint-disable-next-line
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState('');
  const [spenner, setSpenner] = useState(true);
  const [select, setSelect] = useState('');

  useEffect(() => {
    const users = async () => {
      const data = await getDocs(useCollactionRef);
      const dataUser = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      await setUsers(dataUser);
      console.log('Setei valor');
      await setSearch(dataUser);
      await setSpenner(false);
    };
    users();
  }, []);

  useEffect(() => {
    if (name) {
      setSearch(
        users.filter((user) => {
          return user.Name.toLowerCase().includes(name.toLowerCase());
        }),
      );
      console.log('Fiz silter', search);
    }
    if (!name) setSearch(users);
    if (select) setSearch(users.filter((user) => user.Type === select));
  }, [select, name]);

  return (
    <Styled.Container>
      <HeadingDashboard>
        <FaUserAlt /> Usuários
      </HeadingDashboard>
      <Styled.Menu>
        <label>
          <span>Nome</span>
          <input
            disabled={!!select}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o Nome"
            type="text"
          />
        </label>
        <select name="select" onChange={(e) => setSelect(e.target.value)}>
          <option value="" selected>
            Todos
          </option>
          <option value="Aluno">Aluno</option>
          <option value="Administrador">Administrador</option>
          <option value="Colaborador">Colaborador</option>
        </select>
      </Styled.Menu>
      <Styled.UserList>
        {!spenner && search.map((user, key) => <User key={key} user={user} />)}
      </Styled.UserList>
    </Styled.Container>
  );
};
