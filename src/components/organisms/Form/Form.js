import React from 'react';
import { StyledTitle, Wrapper } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ formValues, handleAddUser, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
