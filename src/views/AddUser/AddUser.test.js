import React from 'react';
import AddUser from './AddUser';
import Dashboard from 'views/Dashboard/Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

describe('Form Field', () => {
  test('Renders the component', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'Grażyna' } });
    fireEvent.change(screen.getByTestId('attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('add'));
    screen.getByText('Grażyna');
  });
});
