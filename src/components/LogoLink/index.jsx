import P from 'prop-types';
import * as Styled from './styles';

// eslint-disable-next-line
export const LogoLink = ({ srcImg = '', link }) => {
  return (
    <Styled.Container href={link}>
      <img src={srcImg} alt="" />
    </Styled.Container>
  );
};
LogoLink.propTypes = {
  srcImg: P.string,
  link: P.string.isRequired,
};
