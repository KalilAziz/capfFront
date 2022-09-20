import * as Styled from './styles';

//import { RiMenu5Line, RiCloseFill } from 'react-icons/ri';
/* eslint-disable */
import { useEffect, useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { RiCloseFill, RiMenu5Line } from 'react-icons/ri';
//import { LogoLink } from '../LogoLink';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import { TiDocumentText } from 'react-icons/ti';
import { FaRocket, FaUsers, FaUserAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { LogoLink } from '../LogoLink';
//
export const HeaderDashboard = ({ children }) => {
  // eslint-disable-next-line
  const [visible, setVisible] = useState(false);

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem('@AuthFireBase:dataUser');
    setDataUser(JSON.parse(user));
  }, []);
  return (
    <Styled.Container>
      <Styled.Header>
        <SectionContainer>
          <Styled.Button
            visible={visible}
            onClick={() => setVisible(!visible)}
            aria-label="open/clone Menu"
          >
            {visible ? (
              <RiCloseFill aria-label="Close menu" />
            ) : (
              <RiMenu5Line aria-label="Open menu" />
            )}
          </Styled.Button>
          <span>Olá, {dataUser.name}</span>
        </SectionContainer>
      </Styled.Header>
      <Styled.Content>
        <Styled.Navbar visible={visible}>
          <ul>
            <LogoLink srcImg="./assets/images/capf_logo.svg" link="/home" />
            <div className="sectionUser">
              <span>Usuário</span>
              <div className="line"></div>
            </div>
            <li>
              <Styled.Links to="#">
                <BsFillCalendarEventFill />
                <span>Eventos Disponíveis</span>
              </Styled.Links>
              <span className="tooltip">Eventos Disponíveis</span>
            </li>
            <li>
              <Styled.Links to="#">
                <TiDocumentText />
                <span>Meus Eventos</span>
              </Styled.Links>
              <span className="tooltip">Meus Eventos</span>
            </li>
            <li>
              <Styled.Links to="#">
                <TbCertificate />
                <span>Certificados</span>
              </Styled.Links>
              <span className="tooltip">Certificados</span>
            </li>
            <li>
              <Styled.Links to="#">
                <FaRocket />
                <span>Projetos</span>
              </Styled.Links>
              <span className="tooltip">Projetos</span>
            </li>
            <div className="sectionUser">
              <span>Gestor de Ligas</span>
              <div className="line"></div>
            </div>
            <li>
              <Styled.Links to="#">
                <FaUsers />
                <span>Ligas e Eventos</span>
              </Styled.Links>
              <span className="tooltip">Ligas e Eventos</span>
            </li>
            <div className="sectionUser">
              <span>Gestor de Colig</span>
              <div className="line"></div>
            </div>
            <li>
              <Styled.Links to="#">
                <FaUserAlt />
                <span>Usuários</span>
              </Styled.Links>
              <span className="tooltip">Usuários</span>
            </li>
            <div className="sectionUser">
              <span>Administrador</span>
              <div className="line"></div>
            </div>
            <li>
              <Styled.Links to="#">
                <AiFillSetting />
                <span>Gestão do Site</span>
              </Styled.Links>
              <span className="tooltip">Gestão do Site</span>
            </li>
          </ul>
        </Styled.Navbar>
        {children}
      </Styled.Content>
    </Styled.Container>
  );
};
