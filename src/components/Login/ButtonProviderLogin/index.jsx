import P from 'prop-types';
import * as Styled from './styles';

export const ButtonProviderLogin = ({ srcImage, onClick }) => {
  return (
    <Styled.Container type="submit" onClick={onClick}>
      <img src={`./assets/images/${srcImage}`} alt="" />
    </Styled.Container>
  );
};
ButtonProviderLogin.propTypes = {
  onClick: P.func,
  srcImage: P.string,
};
