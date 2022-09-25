import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../../SectionContainer/styles';
import { Container as LogoLink } from '../../LogoLink/styles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  ${() => css`
  `}
`;

export const Header = styled.div`
    background-color: #6B967D;
    ${SectionContainer}{
      display: flex;
      max-width: 100%;
      justify-content: space-between;
    }
`;

export const Links = styled(Link)`
  ${() => css`
  text-decoration: none;
  display: flex;
  height: 5.5rem;
  align-items: center;
  padding: 0.8rem;
  border-radius: 0.5rem;
  transition: all 300ms ease-in-out;
  border: 1px solid #FDC83B;

  &:hover{
    background-color: #005E26;
  }

  span{
    color: #E6FFE5;
  }

  svg{
    color: #FDC83B;
    font-size: 3rem;
  }
  `}
`;

export const Button = styled.button`
${({ visible }) => css`
  background-color: #6B967D;
  border: none;
  cursor: pointer;
  transform: rotate(${visible ? '1turn' : '0'});
  transition: all 300ms ease-in-out;
  font-size: 3rem;
  margin-left: 2rem;
  `}
`;

export const Content = styled.div`
  display: flex;
`;

export const Navbar = styled.nav`
  ${({ theme, visible, page }) => css`
    min-height: 100vh;
    background-color: #6B967D;
    transition: all 300ms ease-in-out;
    width: ${visible ? '20rem' : '14rem'};

    ul{
      padding: 1rem 0.5rem 5rem 0.5rem;

      img{
        display: block;
        margin: 2rem auto;
      }

      ${LogoLink}{
        @media ${theme.media.lteMedium} {

            img{
              max-height: 10rem;
          }
        }
      }

      .sectionUser{
        color: white;
        display: ${visible ? 'flex' : 'none'};
        align-items: center;
        margin: 2rem 0;
        padding: 0 1rem;
        text-align: center;

        span{
          display: block;
          margin: auto;
        }

        .line{
          flex: 1;
          height: 0.1rem;
          border: 0.1rem solid white;
          margin-left: 0.5rem;
          transition: all 300ms ease-in-out;
        }
      }
      li{
        position: relative;
        list-style: none;
        padding: 0.2rem;

        &:hover > span{
            top: 50%;
            opacity: ${visible ? '0' : '1'};
          }

        > span{
          position: absolute;
          left: 12.2rem;
          top: 0%;
          transform: translateY(-50%);
          border-radius: 0.6rem;
          line-height: 3.5rem;
          text-align: center;
          height: 3.5rem;
          width: 20rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
          transition: all 300ms ease-in-out;
          opacity: 0;
          pointer-events: none;
        }

        ${`.${page}`}{
            background-color: #005E26;
          }

        ${Links}{
          display: flex;
          justify-content: ${visible ? 'start' : 'center'};
          transition: all 300ms ease-in-out;
          span{
            display: ${visible ? 'block' : 'none'};
            transition: all 300ms ease-in-out;
          }
          svg{
            margin-right: ${visible ? '2rem' : 'none'};
            transition: all 300ms ease-in-out;
          }
        }
      }
    }

    @media ${theme.media.lteMedium} {
            display: absolute;
            z-index: 5;
            display: ${visible ? 'absolute' : 'none'};
        }
    `}

`;
