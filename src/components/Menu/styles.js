import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';
import { Container as navLinks } from '../NavLinks/styles';
const menuVisible = () => css`
  visibility: visible;
  opacity: 1;
  overflow-y: none;
`;

export const Container = styled.div`
  ${() => css`

  `}

  & ${Heading}{
    margin: 0;
    padding: 0;
    height: auto;
    background-color:red;
  }

  & ${SectionContainer}{
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuContainer = styled.div`
  ${({ theme, visible }) => css`
      display: flex;
      justify-content: space-between;
      align-items: center;




      @media ${theme.media.lteMedium}{
        visibility: none;
        opacity: 0;
        position: absolute;
        height: 100vh;
        right: 0;
        top: 0;
        width: 40%;
        padding-top: 50px;
        background: red;
        display: flex;
        justify-content: center;
        ${visible && menuVisible()}

        transition: 300ms ease-out;

        & ${navLinks}{
          flex-direction: column;
        }
      }
  `}
`;

export const Button = styled.button`
  ${({ theme, visible }) => css`
      z-index: 6;
      position: absolute;
      top: 3rem;
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
