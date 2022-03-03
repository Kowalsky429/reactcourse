import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage, Wrapper } from '../UsersListItem/UsersListItem.styles';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <StyledAverage value={student.average}>{student.average}</StyledAverage>
      <Title>{student.name}</Title>
    </Wrapper>
  );
};

export default StudentDetails;
