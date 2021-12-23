import React from 'react';
import { render, screen } from '@testing-library/react';

import Houses from '../Houses';

jest.mock('../Houses');

test('renders Available Houses', () => {
  render(<Houses />);
  const app = screen.getByText('Available Houses');
  expect(app).toBeInTheDocument();
});
