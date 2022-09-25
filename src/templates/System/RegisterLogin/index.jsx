import { HeaderLogin } from '../../../components/Login/HeaderLogin';
import { RegisterLoginForm } from '../../../components/Login/RegisterLoginForm';
import { SectionBackground } from '../../../components/SectionBackground';
import * as Styled from './styles';

export const RegisterLogin = () => {
  return (
    <>
      <HeaderLogin />
      <Styled.Container>
        <SectionBackground>
          <RegisterLoginForm />
        </SectionBackground>
      </Styled.Container>
    </>
  );
};
