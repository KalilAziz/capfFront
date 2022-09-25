import * as Styled from './styles';
import { LoginContext } from '../../../context/UserProvider/context';

//Rooks
import { useContext, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

//Firebase
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../../config/firebaseConfig';

//Components
import { Loading } from '../../../components/Loaging';
import { useState } from 'react';

export const App = () => {
  const [visible, setVisible] = useState(false);
  const { signed } = useContext(LoginContext);

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
        Id: doc.id,
      }));
      const DataUser = await dataUsers.filter(
        (user) => user.Email === dataUserStorage.email,
      );
      const converter = await JSON.stringify(DataUser[0]);
      await sessionStorage.setItem('@AuthFireBase:dataUser', converter);
      setVisible(true);
      navigate('/dashboard/eventosdisponiveis');
    };
    user();
  }, []);

  return (
    <>
      {!visible && <Loading />}
      {visible && (
        <Styled.Container>{signed ? <Outlet /> : <Outlet />}</Styled.Container>
      )}
    </>
  );
};
