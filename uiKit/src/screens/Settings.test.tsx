import { render } from '@testing-library/react-native';
import React from 'react';
import { Settings } from 'src/screens/Settings';
import { ThemeProvider } from './../contexts/ThemeContext';

describe('Settings', () => {
  jest.useFakeTimers();
  const pageTree = (
    <ThemeProvider>
      <Settings />
    </ThemeProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
