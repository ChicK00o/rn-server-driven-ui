import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Home } from 'src/screens/Home';
import { ThemeProvider } from './../contexts/ThemeContext'

describe('Home', () => {
  const pageTree = (
      <ThemeProvider>
        <Home />
      </ThemeProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
