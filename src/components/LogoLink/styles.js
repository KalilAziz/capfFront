import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`

    img{
      max-height: 10rem;

      @media ${theme.media.lteMedium} {
        max-height: 7rem;
      }
    }
  `}
`;
