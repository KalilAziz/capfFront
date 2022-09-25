import styled, { css } from 'styled-components';
import { Container as Sectionbackground } from '../../../components/SectionBackground/styles';
import { Container as SectionContainer } from '../../../components/SectionContainer/styles';
export const Container = styled.div`
  ${({ theme }) => css`

    ${Sectionbackground}{
      background: #002815;
      padding: 0;

      @media ${theme.media.lteMedium} {
        display: block;
        padding-top: 8rem;

      }
    }
    ${SectionContainer}{
      padding: 0;
    }
  `}
`;
