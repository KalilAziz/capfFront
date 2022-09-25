import { HeaderLogin } from '../../../components/Login/HeaderLogin';
import { LoginIn } from '../../../components/Login/LoginIn';
import { SectionBackground } from '../../../components/SectionBackground';
import * as Styled from './styles';

export const Login = () => {
  return (
    <>
      <HeaderLogin />
      <Styled.Container>
        <SectionBackground>
          <LoginIn />
        </SectionBackground>
      </Styled.Container>
    </>
  );
};
