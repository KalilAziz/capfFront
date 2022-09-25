import * as Styled from './styles';

//Provider
import { LoginContext } from '../../../context/UserProvider/context';
import {
  setNameUser,
  setEmailUser,
  setStudentPucUser,
  setCellUser,
  setFacultyUser,
  setCourseUser,
  setPeriodUser,
  setRegistratioUser,
  setRegistrationUserDb,
} from '../../../context/UserProvider/actions';

//DB
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../config/firebaseConfig';

//Components
import { Heading } from '../../Heading';

//Hooks
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterLoginFormProvider = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(LoginContext);
  const db = getFirestore(firebaseApp);

  //Referência da base de dados
  const useCollactionRef = collection(db, 'Users');
  const sessionUser = sessionStorage.getItem('@AuthFireBase:user');
  const dataUserStorage = JSON.parse(sessionUser);

  const [name, setName] = useState(dataUserStorage.displayName);
  const [email] = useState(dataUserStorage.email);
  const [studentPuc, setStudentPuc] = useState(true);
  const [cell, setCell] = useState('');
  const [faculty, setFaculty] = useState('Puc - GO');
  const [course, setCourse] = useState('Medicina');
  const [period, setPeriod] = useState('');
  const [registration, setRegistration] = useState('');

  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    if (counter < 3) setCounter((s) => s + 1);
  };
  const decrementCounter = () => {
    if (counter >= 1) setCounter((s) => s - 1);
  };

  const userCreate = async () => {
    await setNameUser(dispatch, name);
    await setEmailUser(dispatch, email);
    await setStudentPucUser(dispatch, studentPuc);
    await setCellUser(dispatch, cell);
    await setFacultyUser(dispatch, faculty);
    await setCourseUser(dispatch, course);
    await setPeriodUser(dispatch, period);
    await setRegistratioUser(dispatch, registration);
    await setRegistrationUserDb(dispatch);

    const data = await getDocs(useCollactionRef);
    console.log('Peguei dados dos usuários na base de dados');

    const dataUser = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log('separei os dados do usuário vindo da base de dados');

    const emailUsers = await dataUser.map((user) => user.Email);
    console.log('Separei os emails entre os dados');
    console.log(emailUsers);
    console.log(email);
    const test = await emailUsers.includes(email);
    console.log('usuário existente: ', test);
    if (test) navigate('/dashboard');
  };
  return (
    <Styled.Container>
      <Styled.Frame>
        <Styled.Image>
          <Heading size="large" as="h2">
            Bem vindo estudante!
          </Heading>
          <img src="../assets/images/bemVindo.png" alt="" />
        </Styled.Image>
        <Styled.Form>
          <Heading size="large" as="h2">
            Crie sua conta
          </Heading>
          {counter === 1 && (
            <div className="form">
              <label htmlFor="">
                <span>1. Vamos começar pelo seu nome:</span>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Digite seu nome"
                />
              </label>
              <label>
                <span>2. Marque uma das opções abaixo:</span>
                <div className="inputRadio">
                  <input
                    type="radio"
                    onChange={(e) => setStudentPuc(e.target.value)}
                    value={true}
                    name="brand"
                  />
                  Sou graduando(a) de medicina na Puc - GO
                </div>
                <div className="inputRadio">
                  <input
                    type="radio"
                    onChange={(e) => setStudentPuc(e.target.value)}
                    value={false}
                    name="brand"
                  />
                  Não sou graduando(a) de medicina na Puc - GO
                </div>
              </label>
              <Styled.Button onClick={incrementCounter}>Proxima</Styled.Button>
            </div>
          )}
          {counter === 2 && (
            <div className="form">
              <label htmlFor="">
                <span>3. Digite seu telefone</span>
                <input
                  type="tel"
                  onChange={(e) => setCell(e.target.value)}
                  value={cell}
                  placeholder="(xx) xxxxx-xxxx"
                />
              </label>

              {studentPuc === 'true' && (
                <label>
                  <span>4. Digite sua matrícola</span>
                  <input
                    type="number"
                    name="puc"
                    onChange={(e) => setRegistration(e.target.value)}
                    value={registration}
                    placeholder="Numero da matrícola"
                  />
                </label>
              )}

              {studentPuc === 'false' && (
                <>
                  <label>
                    <span>4. Qual o nome da falculdade</span>
                    <input
                      type="text"
                      name="puc"
                      onChange={(e) => setFaculty(e.target.value)}
                      value={faculty}
                      placeholder="Nome da Faculdade"
                    />
                  </label>
                </>
              )}

              <Styled.Button onClick={decrementCounter}>Voltar</Styled.Button>
              <Styled.Button
                style={{ marginTop: 0 }}
                onClick={incrementCounter}
              >
                Próximo
              </Styled.Button>
            </div>
          )}
          {counter === 3 && (
            <div className="form">
              {studentPuc === 'true' && (
                <label>
                  <span>5. Digite seu período</span>
                  <input
                    type="number"
                    name="puc"
                    onChange={(e) => setPeriod(e.target.value)}
                    value={period}
                    placeholder="Numero do período"
                  />
                </label>
              )}
              {studentPuc === 'false' && (
                <>
                  <label>
                    <span>4. Qual seu curso</span>
                    <input
                      type="text"
                      name="puc"
                      onChange={(e) => setCourse(e.target.value)}
                      value={course}
                      placeholder="Numero da matrícola"
                    />
                  </label>
                  <label>
                    <span>5. Qual seu periodo</span>
                    <input
                      type="number"
                      name="puc"
                      onChange={(e) => setPeriod(e.target.value)}
                      value={period}
                      placeholder="Numero do periodo"
                    />
                  </label>
                </>
              )}
              <Styled.Button onClick={decrementCounter}>Voltar</Styled.Button>
              <Styled.Button
                style={{ marginTop: 0 }}
                onClick={() => userCreate()}
              >
                Criar Conta
              </Styled.Button>
            </div>
          )}
          <Styled.Counter className="Counter">Etapa {counter}/3</Styled.Counter>
        </Styled.Form>
      </Styled.Frame>
    </Styled.Container>
  );
};
