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
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AuthenticatedApp = () => {
  return (
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
  );
};

const UnathenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(handleSignIn)}
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      <FormField label="login" name="login" id="login" {...register('login', { required: true })} />
      {errors.login && <span>Login is required</span>}
      <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
      {loginError && <span>{loginError}</span>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage('token', response.data.token);
    } catch (e) {
      setError('Please provide valid user data');
    }
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? <AuthenticatedApp /> : <UnathenticatedApp loginError={error} handleSignIn={handleSignIn} />}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
