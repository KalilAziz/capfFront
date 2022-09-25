import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Firebase
import { collection, getDocs, getFirestore } from 'firebase/firestore';

//Dados ao Banco de dados
import { firebaseApp } from '../../config/firebaseConfig';
import { Loading } from '../../components/Loaging';

export const SetData = () => {
  const navigate = useNavigate();
  const db = getFirestore(firebaseApp);
  const useCollactionRef = collection(db, 'Users');

  useEffect(() => {
    const user = async () => {
      const sessionUser = await sessionStorage.getItem('@AuthFireBase:user');
      const dataUserStorage = await JSON.parse(sessionUser);
      const data = await getDocs(useCollactionRef);
      const dataUsers = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const DataUser = await dataUsers.filter(
        (user) => user.email === dataUserStorage.email,
      );
      const converter = await JSON.stringify(DataUser[0]);
      await sessionStorage.setItem('@AuthFireBase:dataUser', converter);
      navigate('/user/dashboard/eventosdisponiveis');
    };
    user();
  }, []);
  return <Loading />;
};
