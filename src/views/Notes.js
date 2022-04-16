import FormField from 'components/molecules/FormField/FormField';
import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import Note from 'components/molecules/Note/Note';
import { addNote } from 'store';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  overflow-y: scroll;
  grid-gap: 30px;
  padding: 30px;
`;

const FormWrapper = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const NotesWrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  flex-direction: column;
  max-height: 700px;
`;

const StyledFormField = styled(FormField)`
  height: ${({ isTextarea }) => (isTextarea ? '300px' : 'unset')};
`;

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ title: `New Note ${Math.floor(Math.random() * 10)}`, content: 'Lorem ipsum dolor sit amet' }));
  };

  return (
    <Wrapper>
      {console.log(notes)}
      <FormWrapper>
        <StyledFormField label="title" name="title" id="notes" />
        <StyledFormField isTextarea label="content" name="content" id="notes" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
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

export default Notes;
