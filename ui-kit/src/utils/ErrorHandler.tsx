import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Button, Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import RNRestart from 'react-native-restart';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Something went wrong:</Text>
          <Text>{error.message}</Text>
          <Button title="Refresh" onPress={resetErrorBoundary} />
          <Text>{error.stack}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// for web refresh hack
const globalAny: any = global;

const ErrorHandler: React.FunctionComponent = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        if (Platform.OS === 'web') {
          // for web refresh hack
          globalAny.window.location.reload(true);
        } else {
          RNRestart.Restart();
        }
      }}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorHandler;
