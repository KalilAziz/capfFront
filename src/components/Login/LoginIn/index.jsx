import * as Styled from './styles';

//Hook e Router
import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

//Components
import { ButtonProviderLogin } from '../ButtonProviderLogin';
import { Heading } from '../../Heading';

//Provider
import { LoginContext } from '../../../context/UserProvider/context';

export const LoginIn = () => {
  // eslint-disable-next-line
  const { state, signInEmail, signInGoogle, signInFacebook, signed } =
    useContext(LoginContext);

  const loginEmail = async () => {
    await signInEmail();
  };

  const loginGoogle = async () => {
    await signInGoogle();
  };

  const loginFacebook = async () => {
    await signInFacebook();
  };

  console.log(state);
  return (
    <Styled.Container>
      <Styled.Frame>
        <Styled.Image>
          <Heading size="large" as="h2">
            Bem Vindo de Volta!
          </Heading>
          <img src="./assets/images/bemVindo.png" alt="" />
        </Styled.Image>
        <Styled.Form>
          <Heading size="large" as="h2">
            Login
          </Heading>
          <form action="">
            <label htmlFor="">
              Email:
              <input type="email" name="" id="" />
            </label>
            <label>
              Senha:
              <input type="password" name="" id="" />
              <span>Esqueci a senha</span>
            </label>
          </form>
          {!signed && (
            <Styled.Button onClick={() => loginEmail()}>Entrar</Styled.Button>
          )}
          <p>Você também pode entrar por:</p>
          <Styled.providerLogin>
            {!signed && (
              <ButtonProviderLogin
                onClick={() => loginGoogle()}
                srcImage="GoogleLoginIcon.svg"
              />
            )}
            {!signed && (
              <ButtonProviderLogin
                onClick={() => loginFacebook()}
                srcImage="FaceLoginIcon.svg"
              />
            )}
            {signed && <Navigate to="/login/checkout" />}
          </Styled.providerLogin>
          <p>
            Não tem uma conta? <Link to="/login/register">Crie uma</Link>
          </p>
        </Styled.Form>
      </Styled.Frame>
    </Styled.Container>
  );
};
