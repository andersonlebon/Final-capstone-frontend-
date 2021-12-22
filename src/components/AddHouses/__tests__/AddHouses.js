import React from 'react';
import { render, screen } from '@testing-library/react';

import AddHouses from '../AddHouses';

jest.mock('../AddHouses');

test('renders HOUSE HOUSE', () => {
  render(<AddHouses />);
  const addhouse = screen.getByText('ADD HOUSE');
  expect(addhouse).toBeInTheDocument();
});
