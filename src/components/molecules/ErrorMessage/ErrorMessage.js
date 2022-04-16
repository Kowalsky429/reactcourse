import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ErrorMessage.styled.js';
import { Title } from 'components/atoms/Title/Title';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support.';

const ErrorMessage = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>Oops!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
