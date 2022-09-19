import { useContext, useEffect } from 'react';
import { LoginContext } from '../../context/LoginProvider/context';
import { HeaderLogin } from '../../components/HeaderLogin';
import * as Styled from './styles';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';
import { useState } from 'react';

export const Dashboard = () => {
  const db = getFirestore(firebaseApp);
  const [dataUser, setDataUser] = useState([]);

  //Referência da base de dados
  const useCollactionRef = collection(db, 'Users');
  // eslint-disable-next-line
  const { state, dispatch, signInGoogle, signed, user, signOut } =
    useContext(LoginContext);

  useEffect(() => {
    const user = async () => {
      const sessionUser = await sessionStorage.getItem('@AuthFireBase:user');
      const dataUserStorage = await JSON.parse(sessionUser);
      console.log(dataUserStorage);
      const data = await getDocs(useCollactionRef);
      const dataUsers = await data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const DataUser = await dataUsers.filter(
        (user) => user.email === dataUserStorage.email,
      );
      setDataUser(DataUser[0]);
      const converter = await JSON.stringify(DataUser[0]);
      sessionStorage.setItem('@AuthFireBase:dataUser', converter);
    };
    user();
  }, []);
  return (
    <>
      <HeaderLogin />
      <Styled.Container> texto:{dataUser.email}</Styled.Container>
    </>
  );
};
