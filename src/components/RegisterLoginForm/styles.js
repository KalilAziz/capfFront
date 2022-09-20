import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  margin: auto;
  padding-top: 5rem;
;

  ${Heading}{
    margin-top: 2rem;
    color: ${theme.colors.greenWater};
  }
  `}
`;

export const Frame = styled.div`
  ${({ theme }) => css`
    display: flex;
    width:80%;
    margin: auto;
    background-color: ${theme.colors.greenLight};
    border: 1px solid rgba(253, 200, 59, 0.5);
    box-shadow: 0rem 0rem 0.7rem 0.5rem rgba(0, 0, 0, 0.52);
    border-radius: 5rem;
    padding: 1rem;
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
      background: ${theme.colors.greenDark};
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      border: 0.1rem solid rgba(253, 200, 59, 0.5);
      box-shadow: 0rem 0rem 0.7rem 0.5rem rgba(0, 0, 0, 0.52);
      border-radius: 5rem;

      img{
        width: 100%;
      }

      @media ${theme.media.lteMedium}{
        display: none;
      }
  `}
`;
export const Form = styled.div`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;

    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;

      label{
        width: 80%;
        color: ${theme.colors.greenWater};
        margin-top: 2rem;
        position: relative;

          input[type="text"],
          input[type="number"],
          input[type="tel"]{
          display: block;
          width: 100%;
          height: 3rem;
          color: ${theme.colors.greenWater};
          border: 0.1rem solid color: ${theme.colors.yellow};
          box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
          border-radius: 0.5rem;
        }
        .inputRadio{
          margin-bottom: 1rem;
          input[type="radio"]{
          display: inline-block;
          margin-right: 1rem;
        }
        }
        span{
          display: block;
          margin-bottom: 2rem;
        }
      }
    }

    > p {
      color: ${theme.colors.greenWater};
      margin: 1rem 0;
    }

  `}

`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin: 4rem 0 2rem 0;
    color: ${theme.colors.primaryColor};
    font-size: ${theme.spacings.small};
    background: ${theme.colors.yellow};
    box-shadow: 0px 0.52rem 0.52rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    padding: 0.8rem;
    text-align: center;
    width: 80%;
    cursor: pointer;
  `}

`;

export const Counter = styled.div`
  ${({ theme }) => css`
  color: ${theme.colors.greenWater};
  `}

`;
