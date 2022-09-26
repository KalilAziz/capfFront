import * as Styled from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { League } from '../../../context/LeagueProvider/context';
import {
  setInitialsLeague,
  setNameLeague,
  setObjectiveLeague,
  setOrientedLeague,
  setRegisterLeagueDb,
} from '../../../context/LeagueProvider/actions';

export const CreateLeague = () => {
  const { dispatch } = useContext(League);
  const [initials, setInitials] = useState('');
  const [name, setName] = useState('');
  const [objective, setObjective] = useState('');
  const [oriented, setOriented] = useState('');

  const createLeague = () => {
    if (!initials) return;
    console.log(initials);
    if (!name) return;
    console.log(name);
    if (!objective) return;
    console.log(objective);
    if (!oriented) return;
    console.log(oriented);
    setInitialsLeague(dispatch, initials);
    setNameLeague(dispatch, name);
    setObjectiveLeague(dispatch, objective);
    setOrientedLeague(dispatch, oriented);
    setInitials('');
    setName('');
    setObjective('');
    setOriented('');
    setRegisterLeagueDb(dispatch);
  };

  const navigate = useNavigate();
  const handleCreateLeague = () => {
    navigate('../');
  };
  return (
    <Styled.Container>
      <Styled.Button onClick={handleCreateLeague}>
        <AiOutlineArrowLeft /> Voltar
      </Styled.Button>
      <Styled.Form>
        <label>
          <span>Sigla:</span>
          <input
            type="text"
            value={initials}
            onChange={(e) => setInitials(e.target.value)}
          />
        </label>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Objetivos:</span>
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="">
          <span>Orientador: </span>
          <select onChange={(e) => setOriented(e.target.value)}>
            <option value={oriented}></option>
            <option value="Teste">Teste</option>
          </select>
        </label>
        <label htmlFor="">
          <button onClick={createLeague}>Criar Liga</button>
        </label>
      </Styled.Form>
    </Styled.Container>
  );
};
