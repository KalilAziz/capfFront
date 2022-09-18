import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const RegistrationProviderForm = () => {
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
        </Styled.Form>
      </Styled.Frame>
    </Styled.Container>
  );
};
RegistrationProviderForm.propTypes = {
  children: P.node,
};
