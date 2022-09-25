import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../../SectionContainer/styles';
export const Container = styled.div`
  ${({ theme }) => css`
  position: fixed;
  padding: ${theme.spacings.small};
  width: 100vw;
  `}

  ${SectionContainer}{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }

`;
