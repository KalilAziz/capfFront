import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Firebase
import { collection, getDocs, getFirestore } from 'firebase/firestore';

//Dados ao Banco de dados
import { firebaseApp } from '../../config/firebaseConfig';
import { Loading } from '../../components/Loading';

export const CheckUser = () => {
  const navigate = useNavigate();

  //Conexão com o Banco de dados
  const db = getFirestore(firebaseApp);

  //Referência da base de dados
  const useCollactionRef = collection(db, 'Users');

  // Dados de Todos os emails dos usuários no banco de dados
  //const [usersEmail, setUserEmail] = useState([]);

  // Dados do usuário salvo no storage

  //Conexão com a base de dados e seta todos os emails no state
  useEffect(() => {
    const getUsers = async () => {
      const sessionUser = await sessionStorage.getItem('@AuthFireBase:user');
      const dataUserStorage = await JSON.parse(sessionUser);
      console.log('Peguei dados do usuário no storage');

      const data = await getDocs(useCollactionRef);
      console.log('Peguei dados dos usuários na base de dados');

      const dataUser = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log('separei os dados do usuário vindo da base de dados');

      const emailUsers = await dataUser.map((user) => user.email);
      console.log('Separei os emails entre os dados');

      const test = await emailUsers.includes(dataUserStorage.email);
      console.log('usuário existente: ', test);
      test ? navigate('/dashboard') : navigate('/login/register');
      //test ? navigate('/dashboard') : '';
    };

    getUsers();
  }, []);
  return <Loading />;
};
