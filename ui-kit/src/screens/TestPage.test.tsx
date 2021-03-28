import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { TestPage } from './TestPage';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

describe('TestPage', () => {
  jest.useFakeTimers();
  const pageTree = (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <TestPage/>
      </ThemeProvider>
    </ApolloProvider>
  );

  it('Should match snapshot', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });
});
