// eslint-disable-next-line
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Firebase
import { collection, getDocs, getFirestore } from 'firebase/firestore';

//Dados ao Banco de dados
import { firebaseApp } from '../../config/firebaseConfig';

export const CheckUser = () => {
  const navigate = useNavigate();

  //Conexão com o Banco de dados
  const db = getFirestore(firebaseApp);

  //Referência da base de dados
  const useCollactionRef = collection(db, 'Users');

  // Dados de Todos os emails dos usuários no banco de dados
  const [usersEmail, setUserEmail] = useState([]);
  console.log('Dados dos usuários (Email)', usersEmail);

  // Dados do usuário salvo no storage
  const sessionUser = sessionStorage.getItem('@AuthFireBase:user');
  const dataUser = JSON.parse(sessionUser);
  console.log('Dados do usuário', dataUser);

  //Conexão com a base de dados e seta todos os emails no state
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(useCollactionRef);
      const dataUser = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const emailUsers = dataUser.map((user) => user.email);
      setUserEmail(emailUsers);
    };
    getUsers();
  }, []);

  // Verifica se o usuário existe
  useEffect(() => {
    const verificaUser = async () => {
      const test = await usersEmail.includes(dataUser.email);
      if (test) navigate('/dashboard');
      if (!test) console.log('Usuário não existe no banco de dados');
    };
    verificaUser();
  }, [usersEmail]);
};
