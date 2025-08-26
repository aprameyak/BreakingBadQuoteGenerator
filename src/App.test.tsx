import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Breaking Bad Quote Generator title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Breaking Bad Quote Generator/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders generate button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Generate Quote/i);
  expect(buttonElement).toBeInTheDocument();
});
