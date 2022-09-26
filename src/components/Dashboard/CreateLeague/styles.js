import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    position: relative;
  `}
`;

export const Button = styled.button`
  ${() => css`
  display: flex;
  align-items: center;
  background-color: #005E26;
  color: #E6FFE5;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  svg{
    color: #E6FFE5;
    font-size: 2rem;
    margin-right: 0.5rem;
  }
  `}
`;

export const Form = styled.div`
  ${() => css`
    margin-top: 4rem;
    label{
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem ;

      span{
        mar
      }

      input, textarea, select, button{
        width: 80%;
      }

      input, select, button{
        height: 4rem;
      }

      textarea{
        resize: none;
        height: 20rem;
      }

      button{
        background-color: #005E26;
        color: #E6FFE5;
        position: absolute;
        right: 0;
      }
    }
  `}
`;
