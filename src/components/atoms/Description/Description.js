import React from 'react';
import { StyledDescription } from './Description.styles';

const Description = ({ name, attendance }) => (
  <StyledDescription>
    <p className="name">{name}</p>
    <p className="attendance">attendance: {attendance}</p>
  </StyledDescription>
);

export default Description;
