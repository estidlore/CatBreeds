import { render, screen } from '@testing-library/react-native';
import React from 'react';

import App from './App';

it('renders correctly', () => {
  expect.assertions(1);
  render(<App />);

  expect(screen.queryByText('Cat Breeds')).toBeOnTheScreen();
});
