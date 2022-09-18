import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { LoginProvider } from './context/LoginProvider';
import { GlobalStyles } from './styles/global-style';
import { theme } from './styles/theme';
import { Home } from './templates/App';
import { CheckUser } from './templates/Login/CheckUser';
import { Login } from './templates/Login';
import { PrivateRoute } from './templates/Login/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/checkout" element={<CheckUser />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </LoginProvider>
  </ThemeProvider>,
);
