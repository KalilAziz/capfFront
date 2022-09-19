import { Button } from '../Button';
import { LogoLink } from '../LogoLink';
import * as Styled from './styles';
import { BsBoxArrowLeft } from 'react-icons/bs';

export const HeaderLogin = () => {
  return (
    <Styled.Container>
      <LogoLink srcImg="../assets/images/capf_logo.svg" link="/" />
      <Button link={'/home'}>
        <BsBoxArrowLeft />
        Voltar
      </Button>
    </Styled.Container>
  );
};
