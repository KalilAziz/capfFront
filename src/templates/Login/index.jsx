import { HeaderLogin } from '../../components/HeaderLogin';
import { LoginIn } from '../../components/LoginIn';
import { SectionBackground } from '../../components/SectionBackground';
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
