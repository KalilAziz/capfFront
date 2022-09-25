import styled, { css } from 'styled-components';
import { Title as Heading } from '../../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  margin: auto;
  padding-top: 5rem;

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
      border: 0.5px solid rgba(253, 200, 59, 0.5);
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

    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;

      label{
        width: 80%;
        color: ${theme.colors.greenWater};
        margin-top: 2rem;
        position: relative;

          input{
          display: block;
          width: 100%;
          height: 3rem;
          background: ${theme.colors.greenWater};
          border: 1px solid ${theme.colors.yellow};
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;

        }
        span{
          position: absolute;
          margin-top: 0.7rem;
          right: 0;
          font-size: 1.3rem;
        }
      }
    }

    > p {
      color: ${theme.colors.greenWater};
      margin: 10px 0;
    }

  `}

`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin-top: 5rem;
    color: ${theme.colors.primaryColor};
    font-size: ${theme.spacings.small};
    background: ${theme.colors.yellow};
    box-shadow: 0px 0.24rem 0.24rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    padding: 0.8rem;
    text-align: center;
    width: 80%;
  `}

`;

export const providerLogin = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
  `}

`;
