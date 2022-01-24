import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Link, useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';

const Nav = styled.div`
  margin-bottom: 20px;
`;

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <>
      <ViewWrapper>
        <Nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </Nav>
        <UsersList users={students} />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
