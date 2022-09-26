import * as Styled from './styles';
import { HeadingDashboard } from '../HeadingDashboard';
import { FaUsers } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { firebaseApp } from '../../../config/firebaseConfig';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { LeagueAndEvent } from '../LeagueAndEvent';
import { useNavigate } from 'react-router-dom';

const db = getFirestore(firebaseApp);
const useCollactionRef = collection(db, 'LeagueAndEvents');

export const LeaguesAndEventsDashboard = () => {
  // eslint-disable-next-line
  const [leagueAndEvents, setLeagueAndEvents] = useState([]);
  const [search, setSearch] = useState([]);
  const [name, setName] = useState('');
  const [spenner, setSpenner] = useState(true);
  const [select, setSelect] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const users = async () => {
      const data = await getDocs(useCollactionRef);
      const dataLeagueAndEvents = await data.docs.map((doc) => ({
        ...doc.data(),
        Id: doc.id,
      }));
      await setLeagueAndEvents(dataLeagueAndEvents);
      console.log('Setei valor');
      await setSearch(dataLeagueAndEvents);
      await setSpenner(false);
    };
    users();
  }, []);

  const handleCreateLeague = () => {
    navigate('criar');
  };

  useEffect(() => {
    if (name) {
      setSearch(
        leagueAndEvents.filter((user) => {
          return user.Name.toLowerCase().includes(name.toLowerCase());
        }),
      );
      console.log('Fiz silter', search);
    }
    if (!name) setSearch(leagueAndEvents);
    if (select)
      setSearch(leagueAndEvents.filter((user) => user.Type === select));
  }, [select, name]);

  return (
    <Styled.Container>
      <HeadingDashboard>
        <FaUsers /> Ligas e Eventos
      </HeadingDashboard>
      <Styled.Button onClick={handleCreateLeague}>
        Adicionar <AiOutlinePlus />
      </Styled.Button>
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
          <option value="Aluno">Ativo</option>
          <option value="Administrador">Inativo</option>
        </select>
      </Styled.Menu>
      <Styled.UserList>
        {!spenner &&
          search.map((user, key) => <LeagueAndEvent key={key} user={user} />)}
      </Styled.UserList>
    </Styled.Container>
  );
};
