import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { Home } from 'src/screens/Home';
import { NativeBaseProvider } from 'native-base';

describe('Home', () => {
  const pageTree = (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
