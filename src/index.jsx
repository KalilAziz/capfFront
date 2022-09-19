import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './templates/Dashboard';
import { LoginProvider } from './context/LoginProvider';
import { GlobalStyles } from './styles/global-style';
import { theme } from './styles/theme';
import { Home } from './templates/App';
import { CheckUser } from './templates/Login/CheckUser';
import { Login } from './templates/Login';
import { PrivateRoute } from './templates/Login/PrivateRoute';
import { RegisterLoginProvider } from './templates/RegisterLoginProvider';
import { RegisterLogin } from './templates/RegisterLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/login/checkout" element={<CheckUser />} />
          <Route
            path="/login/registerProvider"
            element={<RegisterLoginProvider />}
          />
          <Route path="/login/register" element={<RegisterLogin />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </LoginProvider>
  </ThemeProvider>,
);
