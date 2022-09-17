import styled, { css } from 'styled-components';
import { Container as Sectionbackground } from '../../components/SectionBackground/styles';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';
export const Container = styled.div`
  ${() => css`

    ${Sectionbackground}{
      background: #002815;
      display: block;
    }
    ${SectionContainer}{

      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
