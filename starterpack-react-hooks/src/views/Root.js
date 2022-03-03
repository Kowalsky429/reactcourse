import React from 'react';
import Dashboard from 'views/Dashboard/Dashboard';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const AuthenticatedApp = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route exact path="/" element={<Navigate to="/group" />} />
              <Route path="/group/*" element={<Dashboard />}>
                <Route path=":id" element={<Dashboard />} />
              </Route>
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

const UnathenticatedApp = () => {
  return (
    <form style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <FormField label="login" name="login" id="login" />
      <FormField label="password" name="password" id="password" type="password" />
      <Button>Sign in</Button>
    </form>
  );
};

const Root = () => {
  const user = null;
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnathenticatedApp />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
