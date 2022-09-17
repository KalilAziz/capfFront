import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    background: ${theme.colors.yellow};
    box-shadow: 0px 5.24966px 5.24966px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${theme.colors.primaryColor};
    font-size: ${theme.spacings.small};
  `}
`;
