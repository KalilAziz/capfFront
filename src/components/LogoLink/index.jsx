import P from 'prop-types';
import * as Styled from './styles';

export const LogoLink = ({ srcImg = '', link }) => {
  return (
    <Styled.Container href={link}>
      <img src={srcImg} alt="" />
    </Styled.Container>
  );
};
LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
