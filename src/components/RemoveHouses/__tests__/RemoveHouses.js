import React from 'react';
import { render, screen } from '@testing-library/react';

import RemoveHouses from '../RemoveHouses';

jest.mock('../RemoveHouses');

test('renders Remove house', () => {
  render(<RemoveHouses />);
  const removehouse = screen.getByText('Remove house');
  expect(removehouse).toBeInTheDocument();
});
