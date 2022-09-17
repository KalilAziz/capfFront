import P from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonProviderLogin } from '../ButtonProviderLogin';
import { Heading } from '../Heading';
//import { SectionBackground } from '../SectionBackground';
import * as Styled from './styles';

export const LoginIn = () => {
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
            <Styled.Button type="submit">Entrar</Styled.Button>
          </form>
          <p>Você também pode entrar por:</p>
          <Styled.providerLogin>
            <ButtonProviderLogin srcImage="GoogleLoginIcon.svg" />
            <ButtonProviderLogin srcImage="FaceLoginIcon.svg" />
          </Styled.providerLogin>
          <p>
            Não tem uma conta? <Link>Crie uma</Link>
          </p>
        </Styled.Form>
      </Styled.Frame>
    </Styled.Container>
  );
};
LoginIn.propTypes = {
  children: P.node,
};
