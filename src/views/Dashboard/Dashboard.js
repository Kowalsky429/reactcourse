import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { ViewWrapper, StyledList } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'provider/UsersProvider';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <ViewWrapper>
        <Title>Students list</Title>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
