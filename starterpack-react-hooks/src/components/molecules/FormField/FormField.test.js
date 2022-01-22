// import React from 'react';
// import '@testing-library/jest-dom/extend-expect';
// import FormField from './FormField';
// import { renderWithProviders } from 'helpers/renderWithThemeProvider';

// const InputWithButton = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => setInputValue(e.target.value);

//   return (
//     <>
//       <input value={inputValue} onChange={handleInputChange} name="name" id="name" placeholder="enter here a value" />
//       <button disabled={!inputValue}>Submit</button>
//     </>
//   );
// };

// describe('component InputWithButton', () => {
//   test('rendering component', () => {
//     render(<InputWithButton />);
//     screen.getByText('Submit');
//   });
//   test('Properly handles value change', () => {
//     render(<InputWithButton />);
//     const input = screen.getByPlaceholderText('enter here a value');
//     const button = screen.getByText('Submit');
//     expect(button).toBeDisabled();
//     fireEvent.change(input, { target: { value: 'Roman' } });
//     expect(input).toHaveValue('Roman');
//     expect(button).not.toBeDisabled();
//   });
// });

// teraz na prawdziwych komponentach

// describe('Form Field', () => {
//   test('Renders the component', () => {
//     renderWithProviders(<FormField name="name" id="name" label="name" />);
//   });
// });
