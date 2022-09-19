import { HeaderLogin } from '../../components/HeaderLogin';
import { RegisterLoginForm } from '../../components/RegisterLoginForm';
import { SectionBackground } from '../../components/SectionBackground';

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
