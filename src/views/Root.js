import React from 'react';
import Dashboard from 'views/Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from 'views/AddUser/AddUser';
import Navigation from 'components/organisms/Navigation/Navigation';
import UsersProvider from 'provider/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UsersProvider>
          <Wrapper>
            <Navigation />
            <Routes exact>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </Wrapper>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
