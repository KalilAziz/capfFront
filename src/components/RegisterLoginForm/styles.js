import styled, { css } from 'styled-components';
import { Container as ContainerBg } from '../SectionBackground/styles';
import { Container as ContainerTx } from '../SectionContainer/styles';
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${() => css`
  display: flex;
  margin: auto;
  padding-top: 5rem;
;

${Heading}{
  margin-top: 2rem;
  color: #E6FFE5;
}

  ${ContainerBg}{


  }

  ${ContainerTx}{

  }


  `}
`;

export const Frame = styled.div`
  ${() => css`
    display: flex;
    width:80%;
    margin: auto;
    background-color: #52695B;
    border: 1px solid rgba(253, 200, 59, 0.5);
    box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.52);
    border-radius: 5rem;
    padding: 1rem;
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
      background: #243520;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      border: 0.5px solid rgba(253, 200, 59, 0.5);
      box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.52);
      border-radius: 4.9rem;

      img{
        width: 100%;
      }

      @media ${theme.media.lteMedium}{
        display: none;
      }
  `}
`;
export const Form = styled.div`
  ${() => css`
    flex: 1;
    text-align: center;

    .form{
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: start;

      label{
        width: 80%;
        color: #E6FFE5;
        margin-top: 2rem;
        position: relative;

          input[type="text"],
          input[type="number"],
          input[type="tel"]{
          display: block;
          width: 100%;
          height: 3rem;
          background: #F1FFEA;
          border: 1px solid #FDC83B;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 5px;
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
      color: #E6FFE5;
      margin: 10px 0;
    }

  `}

`;

export const Button = styled.button`
  ${({ theme }) => css`
    margin: 4rem 0 2rem 0;
    color: ${theme.colors.primaryColor};
    font-size: ${theme.spacings.small};
    background: ${theme.colors.yellow};
    box-shadow: 0px 5.24966px 5.24966px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    padding: 0.8rem;
    text-align: center;
    width: 80%;
    cursor: pointer;
  `}

`;

export const Counter = styled.div`
  ${() => css`
    color: #E6FFE5;
  `}

`;
