import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Home } from 'src/screens/Home';

describe('Home', () => {
  const pageTree = (
        <Home />
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
