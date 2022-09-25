import { Button } from '../../Button';
import { LogoLink } from '../../LogoLink';
import * as Styled from './styles';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { SectionContainer } from '../../SectionContainer';

export const HeaderLogin = () => {
  return (
    <Styled.Container>
      <SectionContainer>
        <LogoLink srcImg="../assets/images/capf_logo.svg" link="/home" />
        <Button link={'/home'}>
          <BsBoxArrowLeft />
          Voltar
        </Button>
      </SectionContainer>
    </Styled.Container>
  );
};
