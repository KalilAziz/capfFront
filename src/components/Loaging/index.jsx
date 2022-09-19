import { BiLoaderAlt } from 'react-icons/bi';
import * as Styled from './styles';

export const Loading = () => {
  return (
    <Styled.Container>
      <Styled.Loading>
        <BiLoaderAlt />
      </Styled.Loading>
    </Styled.Container>
  );
};
