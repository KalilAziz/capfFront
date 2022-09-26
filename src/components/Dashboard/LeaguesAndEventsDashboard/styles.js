import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  `}
`;

export const Menu = styled.div`
  ${({ theme }) => css`
  margin-top: 2rem;
    display: flex;
    gap: 2rem;

  label{
    display: flex;
    align-items: center;
    height: 4rem;
    flex: 1;

      span{
        margin-right: 1rem;
      }

      input{
        display: block;
        height: 100%;
        flex: 1;
        font-size: 2rem;
      }
    }
    select{
      position: relative;
      padding: 0 2rem;
      flex: 1;
      height: 4rem;
      text-align: center;
    }

    button{
      padding: 0 2rem;
    }

    @media ${theme.media.lteMedium} {
      flex-wrap: wrap;

      select{
        position: relative;
        margin-bottom: 2rem;
      }
    }
  `}

`;

export const UserList = styled.div`
  ${() => css`
  margin-top: 2rem;
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
    margin-left: 0.5rem;
  }
  `}
`;
