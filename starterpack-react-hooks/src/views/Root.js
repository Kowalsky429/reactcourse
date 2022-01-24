import React from 'react';
import Dashboard from 'views/Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import AddUser from 'views/AddUser/AddUser';
import UsersProvider from 'provider/UsersProvider';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes exact>
              <Route path="/" element={<Navigate to="/group/:id" />} />
              <Route path="/group/:id" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
