import React, { useState, useEffect } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Nav, NavTitle, NavLinkItem } from './Dashboard.styles';
import { useStudents } from 'hooks/useStudents';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { Wrapper } from 'views/Root.styles';
import { TitleWrapper } from 'components/templates/NewsSection/NewsSection.styles';
import { Title } from 'components/atoms/Title/Title';
// import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [setGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0].id}`} />;

  return (
    <ViewWrapper>
      <Nav>
        <NavTitle as="h2">Group {id}</NavTitle>
          {groups.map(({ id }) => (
            <NavLinkItem key={id} to={`/group/${id}`}>
              {id}{' '}
            </NavLinkItem>
          ))}
      </Nav>
      <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
    </ViewWrapper>
  );
};

export default Dashboard;
