import P from 'prop-types';
import { MenuLink } from '../MenuLink';
import * as Styled from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link, key) => (
        <MenuLink key={key} {...link} />
      ))}
      <button>login</button>
    </Styled.Container>
  );
};
NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
