import * as Styled from './styles';

//Components
import { Heading } from '../../Heading';
import { useContext, useState } from 'react';
import { Create } from '../../../context/LoginProvider/actions';
import { LoginContext } from '../../../context/LoginProvider/context';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../config/firebaseConfig';

export const RegisterLoginFormProvider = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(LoginContext);
  const db = getFirestore(firebaseApp);

  //Referência da base de dados
  const useCollactionRef = collection(db, 'Users');
  const sessionUser = sessionStorage.getItem('@AuthFireBase:user');
  const dataUserStorage = JSON.parse(sessionUser);
  //console.log(dataUserStorage);

  const [name, setName] = useState(dataUserStorage.displayName);
  const [email] = useState(dataUserStorage.email);
  const [puc, setPuc] = useState(true);
  const [facudadeName, setFaculdadeName] = useState('Puc - GO');
  const [telefone, setTelefone] = useState('');
  const [matricula, setMatricula] = useState('');
  const [cursoName, setCursoName] = useState('Medicina');
  const [periodo, setPeriodo] = useState('');
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    if (counter < 3) setCounter((s) => s + 1);
  };
  const decrementCounter = () => {
    if (counter >= 1) setCounter((s) => s - 1);
  };

  const user = {
    name: name,
    email: email,
    puc: puc,
    facudadeName: facudadeName,
    telefone: telefone,
    matricula: matricula,
    cursoName: cursoName,
    periodo: periodo,
  };

  const userCreate = async (user) => {
    await Create(dispatch, user, 'Users');
    const data = await getDocs(useCollactionRef);
    console.log('Peguei dados dos usuários na base de dados');

    const dataUser = await data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log('separei os dados do usuário vindo da base de dados');

    const emailUsers = await dataUser.map((user) => user.email);
    console.log('Separei os emails entre os dados');

    const test = await emailUsers.includes(user.email);
    console.log('usuário existente: ', test);
    if (test) navigate('/user/dashboard/eventosdisponiveis');
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
                    onChange={(e) => setPuc(e.target.value)}
                    value={true}
                    name="brand"
                  />
                  Sou graduando(a) de medicina na Puc - GO
                </div>
                <div className="inputRadio">
                  <input
                    type="radio"
                    onChange={(e) => setPuc(e.target.value)}
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
                  onChange={(e) => setTelefone(e.target.value)}
                  value={telefone}
                  placeholder="(xx) xxxxx-xxxx"
                />
              </label>

              {puc === 'true' && (
                <label>
                  <span>4. Digite sua matrícola</span>
                  <input
                    type="number"
                    name="puc"
                    onChange={(e) => setMatricula(e.target.value)}
                    value={matricula}
                    placeholder="Numero da matrícola"
                  />
                </label>
              )}

              {puc === 'false' && (
                <>
                  <label>
                    <span>4. Qual o nome da falculdade</span>
                    <input
                      type="text"
                      name="puc"
                      onChange={(e) => setFaculdadeName(e.target.value)}
                      value={facudadeName}
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
              {puc === 'true' && (
                <label>
                  <span>5. Digite seu período</span>
                  <input
                    type="number"
                    name="puc"
                    onChange={(e) => setPeriodo(e.target.value)}
                    value={periodo}
                    placeholder="Numero do período"
                  />
                </label>
              )}
              {puc === 'false' && (
                <>
                  <label>
                    <span>4. Qual seu curso</span>
                    <input
                      type="text"
                      name="puc"
                      onChange={(e) => setCursoName(e.target.value)}
                      value={cursoName}
                      placeholder="Numero da matrícola"
                    />
                  </label>
                  <label>
                    <span>5. Qual seu periodo</span>
                    <input
                      type="number"
                      name="puc"
                      onChange={(e) => setPeriodo(e.target.value)}
                      value={periodo}
                      placeholder="Numero do periodo"
                    />
                  </label>
                </>
              )}
              <Styled.Button onClick={decrementCounter}>Voltar</Styled.Button>
              <Styled.Button
                style={{ marginTop: 0 }}
                onClick={() => userCreate(user)}
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
