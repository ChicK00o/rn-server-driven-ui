import { render } from '@testing-library/react-native';
import React from 'react';
import { Settings } from 'src/screens/Settings';

describe('Settings', () => {
  jest.useFakeTimers();
  const pageTree = (
      <Settings />
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
