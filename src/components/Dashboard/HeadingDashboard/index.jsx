import P from 'prop-types';
import { Heading } from '../../Heading';
import * as Styled from './styles';

export const HeadingDashboard = ({ children }) => {
  return (
    <Styled.Container>
      <Heading as="h2">{children}</Heading>
    </Styled.Container>
  );
};
HeadingDashboard.propTypes = {
  children: P.node,
};
