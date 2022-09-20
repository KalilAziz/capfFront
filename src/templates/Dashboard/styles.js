import styled, { css } from 'styled-components';
import { Container as SectionBackground } from '../../components/SectionBackground/styles';
export const Container = styled.div`
  ${() => css`

  ${SectionBackground}{
    flex:1;
    display: block;
    min-height: 100%;
  `}
`;
