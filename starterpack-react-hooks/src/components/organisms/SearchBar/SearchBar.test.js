import { render, screen, fireEvent } from 'test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { SearchBar } from './SearchBar';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', async () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Romański/);
  });
  it('Dissapear when input is empty', () => {});
});
