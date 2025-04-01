import { render, screen } from '@testing-library/react';
import App from './App';
test('renders my name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText(/My name is Gabriel Zacharias/i);
  expect(nameElement).toBeInTheDocument();
});
