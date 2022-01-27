import React from 'react';
import StudentsListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './StudentsListItem';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
