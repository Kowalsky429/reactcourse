import React, { useState, useEffect } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Navigate, useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/UsersList/StudentsList';
import { Nav, NavTitle, NavLinkItem } from './Dashboard.styles';
import { useStudents } from 'hooks/useStudents';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [setGroups]);

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;

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
        <StudentsList />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
