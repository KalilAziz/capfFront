import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  background-color: #005E26;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: #E6FFE5;


  span{
      min-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      svg{
      color: #E6FFE5;
    }
    }
  `}
`;

const teste = () => css`
  visibility: visible;
  opacity: 1;
`;
export const Info = styled.div`
  ${({ visible }) => css`
    padding: 1rem;
    min-width: 100%;
    display: ${visible ? 'block' : 'none'};
    transition: all 200ms ease-in-out;
    visibility: none;
    opacity: 0;
    ${visible && teste()}

    span{
      border: 1px solid #FDC83B;
      display: flex;
      justify-content: start;
      margin: 0.5rem 0;
      padding: 1rem;
      border-radius: 0.5rem;

      select{
        background: none;
        color: white;
      }
    }
  `}
`;
