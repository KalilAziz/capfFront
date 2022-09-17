import P from 'prop-types';
import * as Styled from './styles';

// eslint-disable-next-line
export const ButtonProviderLogin = ({ srcImage }) => {
  return (
    <Styled.Container type="submit">
      <img src={`./assets/images/${srcImage}`} alt="" />
    </Styled.Container>
  );
};
ButtonProviderLogin.propTypes = {
  children: P.node,
  link: P.string.isRequired,
};
