import { LogoLink } from '../LogoLink';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

export const Menu = () => {
  // eslint-disable-next-line
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Styled.Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="open/clone Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container onClick={() => setVisible(false)}>
        <SectionContainer>
          <LogoLink srcImg="https://capf.com.br/svg/capf-logo.svg" link="#" />
          <Styled.MenuContainer visible={visible}>
            <ul>
              <li>
                <Link className="link" to="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="#">
                  Produtos
                </Link>
              </li>
              <li>
                <Link className="link" to="#">
                  Quem Somos <FiChevronDown />
                  <ul>
                    <li>
                      <Link className="link" to="#">
                        Contato
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="#">
                        Reclamações
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Áreas Acadêmicas <FiChevronDown />
                  <ul>
                    <li>
                      <Link className="link" to="#">
                        Grupos estudantis
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="#">
                        Espaço de calouros
                      </Link>
                    </li>
                    <li>
                      <Link className="link" to="#">
                        Colig
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
