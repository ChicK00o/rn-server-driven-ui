import { render } from '@testing-library/react-native';
import React from 'react';
import { Settings } from 'src/screens/Settings';
import { ThemeProvider } from './../contexts/ThemeContext';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

describe('Settings', () => {
  jest.useFakeTimers();
  const pageTree = (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <Settings />
      </ThemeProvider>
    </ApolloProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
