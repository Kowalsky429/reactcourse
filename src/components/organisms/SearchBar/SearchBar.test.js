import { render, screen, fireEvent } from 'test-utils';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', async () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'Low' } });
    await screen.findByText(/Lowell/);
  });
  it('Dissapear when input is empty', () => {
    fireEvent.change(input, { target: { value: '' } });
  });
});
