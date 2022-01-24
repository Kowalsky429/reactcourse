import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Link, useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';

const Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const NavTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 15px;
  span {
    color: ${({ theme }) => theme.colors.success};
  }
`;

const NavLinkItem = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkGrey};
  padding: 4px 8px;
  border-radius: 50%;
  margin: 0 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.grey};
  }
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
          <NavTitle>
            Group <span>{id}</span>
          </NavTitle>
          {groups.map((group) => (
            <NavLinkItem key={group} to={`/group/${group}`}>
              {group}
            </NavLinkItem>
          ))}
        </Nav>
        <UsersList users={students} />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
