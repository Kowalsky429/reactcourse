import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'provider/UsersProvider';
import { useForm } from 'hooks/useForm';

export const initalFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initalFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initalFormState);
    } else {
      handleThrowError('You need to give consent');
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="consent" id="consent" name="consent" type="checkbox" value={formValues.consent} onChange={handleToggleConsent} />
      <Button type="submit">add</Button>
      {formValues.error ? formValues.error : null}
    </ViewWrapper>
  );
};

export default AddUser;
