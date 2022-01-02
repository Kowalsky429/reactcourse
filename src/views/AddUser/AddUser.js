import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'provider/UsersProvider';

const initalFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const [formValues, setFormValue] = useState(initalFormState);
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValue({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValue(initalFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
