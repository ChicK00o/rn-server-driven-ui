import { render } from '@testing-library/react-native';
import React from 'react';
import { Settings } from 'src/screens/Settings';
import { NativeBaseProvider } from 'native-base';

describe('Settings', () => {
  jest.useFakeTimers();
  const pageTree = (
    <NativeBaseProvider>
      <Settings />
    </NativeBaseProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
