import React, { useState, useEffect } from 'react';
import StudentsListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './StudentsListItem';
import { Title } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    async () => {
      const students = await getStudents(id);
      setStudents(students);
    };
  }, [setStudents, id]);

  return (
    <>
      <Title>Students list</Title>
      {console.log(students)}
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
