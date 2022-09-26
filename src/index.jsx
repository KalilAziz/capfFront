import React from 'react';
import ReactDOM from 'react-dom/client';

//Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Theme
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-style';
import { theme } from './styles/theme';

//Provider
import { LoginProvider } from './context/UserProvider';
import { LeagueProvider } from './context/LeagueProvider';

//Site
import { App as AppSite } from './templates/Site/App';

//Dashboard
import { App as AppDashboard } from './templates/Dashboard/App';
import { AvailableEvents } from './templates/Dashboard/AvailableEvents';
import { DashboardMeusEventos } from './templates/Dashboard/MyEvents';
import { DashboardCertificados } from './templates/Dashboard/Certificates';
import { DashboardProjetos } from './templates/Dashboard/Projects';
import { DashboardLigaeEventos } from './templates/Dashboard/LeagueAndEvents';
import { DashboardUsuario } from './templates/Dashboard/Users';

//Login
import { CheckUser } from './templates/System/Login/CheckUser';
import { Login } from './templates/System/Login';

import { RegisterLoginProvider } from './templates/System/RegisterLoginProvider';
import { RegisterLogin } from './templates/System/RegisterLogin';
import { LeaguesAndEventsDashboard } from './components/Dashboard/LeaguesAndEventsDashboard';
import { CreateLeague } from './components/Dashboard/CreateLeague';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <LoginProvider>
      <LeagueProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppSite />}>
              <Route path="/home" element={<span>dvsdv</span>} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/login/checkout" element={<CheckUser />} />
            <Route
              path="/login/registerProvider"
              element={<RegisterLoginProvider />}
            />
            <Route path="/login/register" element={<RegisterLogin />} />

            <Route path="/dashboard" element={<AppDashboard />}>
              <Route path="eventosdisponiveis" element={<AvailableEvents />} />
              <Route path="eventos" element={<DashboardMeusEventos />} />
              <Route path="certificados" element={<DashboardCertificados />} />
              <Route path="projetos" element={<DashboardProjetos />} />
              <Route path="ligaeeventos" element={<DashboardLigaeEventos />}>
                <Route path="" element={<LeaguesAndEventsDashboard />} />
                <Route path="Criar" element={<CreateLeague />} />
              </Route>
              <Route path="usuarios" element={<DashboardUsuario />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
      </LeagueProvider>
    </LoginProvider>
  </ThemeProvider>,
);
