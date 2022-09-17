import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    text-align: center;
    max-width: 580px;
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
      margin: ${theme.spacings.xhuge} 0;
  `}
`;
