import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${theme.spacings.small};
  `}
`;
