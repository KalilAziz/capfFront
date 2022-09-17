import P from 'prop-types';
import * as Styled from './styles';

// eslint-disable-next-line
export const ButtonProviderLogin = ({ srcImage, onClick }) => {
  return (
    <Styled.Container type="submit" onClick={onClick}>
      <img src={`./assets/images/${srcImage}`} alt="" />
    </Styled.Container>
  );
};
ButtonProviderLogin.propTypes = {
  children: P.node,
  link: P.string.isRequired,
};
