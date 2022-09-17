import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  width: 100%;
  padding: ${theme.spacings.small};
  `}
`;
