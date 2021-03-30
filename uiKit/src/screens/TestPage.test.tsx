import { render } from '@testing-library/react-native';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TestPage } from './TestPage';
import { NativeBaseProvider } from 'native-base';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

describe('TestPage', () => {
  jest.useFakeTimers();
  const pageTree = (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <TestPage />
      </NativeBaseProvider>
    </ApolloProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
