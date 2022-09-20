import { useEffect } from 'react';
import { HeaderDashboard } from '../../components/HeaderDashboard';
import * as Styled from './styles';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from '../../config/firebaseConfig';
import { useState } from 'react';
import { SectionBackground } from '../../components/SectionBackground';

export const Dashboard = () => {
  const db = getFirestore(firebaseApp);
  // eslint-disable-next-line
  const [dataUser, setDataUser] = useState([]);

  //Referência da base de dados
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
      setDataUser(DataUser[0]);
      const converter = await JSON.stringify(DataUser[0]);
      sessionStorage.setItem('@AuthFireBase:dataUser', converter);
    };
    user();
  }, []);
  return (
    <Styled.Container>
      <HeaderDashboard>
        <SectionBackground> ...</SectionBackground>
      </HeaderDashboard>
    </Styled.Container>
  );
};
