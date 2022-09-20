// Styled-components
import * as Styled from './styles';

// Icons
import { FiChevronDown } from 'react-icons/fi';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { RiMenu5Line, RiCloseFill } from 'react-icons/ri';
import {} from 'react-icons/ri';

// Components
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { Button } from '../Button';

// Hooks
import { useState } from 'react';

export const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="open/clone Menu"
      >
        {visible ? (
          <RiCloseFill aria-label="Close menu" />
        ) : (
          <RiMenu5Line aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container onClick={() => setVisible(false)} visible={visible}>
        <SectionContainer>
          <LogoLink srcImg="./assets/images/capf_logo.svg" link="/home" />
          <Styled.MenuContainer visible={visible}>
            <ul>
              <li>
                <Styled.Links to="#">Home</Styled.Links>
              </li>
              <li>
                <Styled.Links to="#">Produtos</Styled.Links>
              </li>
              <li>
                <Styled.Links to="#">
                  Quem Somos <FiChevronDown />
                  <ul>
                    <li>
                      <Styled.Links to="#">Contato</Styled.Links>
                    </li>
                    <li>
                      <Styled.Links to="#">Reclamações</Styled.Links>
                    </li>
                  </ul>
                </Styled.Links>
              </li>
              <li>
                <Styled.Links to="#">
                  Áreas Acadêmicas <FiChevronDown />
                  <ul>
                    <li>
                      <Styled.Links to="#">Grupos estudantis</Styled.Links>
                    </li>
                    <li>
                      <Styled.Links to="#">Espaço de calouros</Styled.Links>
                    </li>
                    <li>
                      <Styled.Links to="#">Colig</Styled.Links>
                    </li>
                  </ul>
                </Styled.Links>
              </li>
              <Button link={'/login'}>
                Login <BsBoxArrowInRight />
              </Button>
            </ul>
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
