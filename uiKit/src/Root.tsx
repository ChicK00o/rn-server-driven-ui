import React from 'react';
import { Router } from 'src/routes/Router';
import { enableScreens } from 'react-native-screens';
import { ThemeProvider } from './contexts/ThemeContext';
import './i18n';
import 'src/utils/debuggers/reactotron';
import 'src/utils/debuggers/flipper';
import ErrorHandler from './utils/ErrorHandler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Optimize React Navigation: https://reactnavigation.org/docs/react-native-screens/
enableScreens();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export const Root = () => {
  return (
    <ErrorHandler>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    </ErrorHandler>
  );
};
