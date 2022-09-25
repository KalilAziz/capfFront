import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #005E26;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: #E6FFE5;


  span{
      min-width: 100%;
      padding: 0 1rem;
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
  display: block;
`;
export const Info = styled.div`
  ${({ visible }) => css`
    transition: all 1s ease-in-out;
    visibility: hidden;
    display: none;
    ${visible && teste()}
  `}
`;
