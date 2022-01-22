import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'provider/UsersProvider';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const { users } = useContext(UsersContext);

  return (
    <>
      <ViewWrapper>
        <UsersList users={users} />
      </ViewWrapper>
    </>
  );
};

export default Dashboard;
