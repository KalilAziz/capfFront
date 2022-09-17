import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  ${({ theme }) => css`
    border: none;
    width: 12rem;
    height: 4.5rem;
    background: ${theme.colors.yellow};
    box-shadow: 0px 5.24966px 5.24966px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: ${theme.colors.primaryColor};
    font-size: ${theme.spacings.small};
  `}
`;
