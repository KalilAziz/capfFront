import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
//import { Title as Heading } from '../Heading/styles';

const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
  transform: translateX(0px);
`;

export const Container = styled.div`
${({ theme }) => css`
  background-color: ${theme.colors.primaryColor};
  padding: ${theme.spacings.small};
`}

${SectionContainer}{
  padding-top: 0;
  padding-bottom: 0;
  display: flexbox;
  justify-content: space-between;
  align-items: center;
}
`;

export const MenuContainer = styled.nav`
  ${({ theme, visible }) => css`

  .link{
    color: ${theme.colors.white};
    text-decoration: none;

    &:hover{
      color: ${theme.colors.mediumGray};
    }
  }

  ul{
    list-style: none;
    display: flex;

    li{
      position: relative;
      padding: 1rem 2rem;

      &:hover ul, &:focus ul{
        visibility: visible;
        opacity: 1;
        transform: translateY(15px);
      }

      ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        visibility: none;
        opacity: 0;
        transition: all 300ms ease-in-out;

        li{
          background-color: ${theme.colors.primaryColor};
          width: 20rem;
        }
      }
    }
  }

    @media ${theme.media.lteMedium} {
      background-color: ${theme.colors.primaryColor};
      visibility: none;
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      height: 100vh;
      padding-top: 15rem;
      transition: all 300ms ease-in-out;
      transform: translateX(-100px);
      ${visible && menuVisible}

      ul{
        flex-direction: column;
        margin-right: auto;

        li{

          &:hover ul, &:focus ul{
            transform: translateY(0);
          }

          ul{
            position: relative;
            visibility: visible;
            opacity: 1;
          }

        }



      }
    }

  `}
`;

export const Button = styled.button`

  ${({ theme, visible }) => css`
      z-index: 6;
      position: absolute;
      top: 5rem;
      right: 2rem;
      width: 4rem;
      height: 4rem;
      background: ${theme.colors.primaryColor};
      color: ${theme.colors.white};
      border: none;
      display: none;
      pointer-events: ${visible ? 'none' : 'all'};
      @media ${theme.media.lteMedium}{
        display: flex;
        align-items: center;
        justify-content: center;

      }
  `}


  > svg{
    width: 2.5rem;
    height: 2.5rem;
  }
`;
