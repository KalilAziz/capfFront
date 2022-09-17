/* eslint-disable */
import P from 'prop-types';
import { useEffect, useState, useReducer } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';

import { data } from './data';
import { reducer } from './reducer';
import { LoginContext } from './context';
import { Navigate } from 'react-router-dom';
import { firebaseApp } from '../../config/firebaseConfig';

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [state, dispatch] = useReducer(reducer, data);
  const [email, setEmail] = useState('kalilazizsantoschami@hotmail.com');
  const [password, setPassword] = useState('15975352Kalil@');

  useEffect(() => {
    const loadStorageAuth = () => {
      const sessionToken = sessionStorage.getItem('@AuthFireBase:token');
      const sessionUser = sessionStorage.getItem('@AuthFireBase:user');
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
      }
    };

    loadStorageAuth();
  }, []);

  const auth = getAuth(firebaseApp);

  const signInEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(email, password);
        const user = userCredential.user;
        setUser(user);
        sessionStorage.setItem('@AuthFireBase:user', JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUser(user);
        sessionStorage.setItem('@AuthFireBase:token', token);
        sessionStorage.setItem('@AuthFireBase:user', JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const signInFacebook = () => {
    signInWithPopup(auth, providerFacebook)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const signOut = () => {
    sessionStorage.clear();
    setUser(null);
    console.log('deslogado');

    return <Navigate to="/" />;
  };

  return (
    <LoginContext.Provider
      value={{
        state,
        dispatch,
        signInEmail,
        signInGoogle,
        signInFacebook,
        signed: !!user,
        user,
        signOut,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: P.node,
};
