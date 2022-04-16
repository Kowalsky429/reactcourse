import React, { useState } from 'react';
import styled from 'styled-components';
import Note from 'components/molecules/Note/Note';
import { useSelector } from 'react-redux';

const WidgetHandler = styled.div`
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.colors.darkGrey};
  transform: rotate(-90deg);
  position: absolute;
  top: 30px;
  left: -45px;
  border-radius: 8px 8px 0 0;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  max-height: 700px;
`;

const Wrapper = styled.div`
  width: 400px;
  max-height: 700px;
  height: auto;
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s ease;
`;

const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes);

  const handleToggleWidget = () => setIsOpen((prevState) => !prevState);

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => <Note id={id} key={id} title={title} content={content} />)
        ) : (
          <p>create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default NotesWidget;
