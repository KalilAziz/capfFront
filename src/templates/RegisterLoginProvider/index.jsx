import { HeaderLogin } from '../../components/HeaderLogin';
import { RegisterLoginFormProvider } from '../../components/RegisterLoginFormProvider';
import { SectionBackground } from '../../components/SectionBackground';

import * as Styled from './styles';

export const RegisterLoginProvider = () => {
  return (
    <>
      <HeaderLogin />
      <Styled.Container>
        <SectionBackground>
          <RegisterLoginFormProvider />
        </SectionBackground>
      </Styled.Container>
    </>
  );
};
