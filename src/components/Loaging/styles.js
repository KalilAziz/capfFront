import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css``}
`;

export const Loading = styled.div`
  ${({ theme }) => css`
     background: ${theme.colors.greenDark};
     width: 100vw;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 15rem;

     svg{
      color: ${theme.colors.yellow};
      animation: loading 2s linear infinite;
     }

     @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;
