import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './components/TestScreen';
import MyStackNavigator from './stacks/AppStackNavigator';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MyStackNavigator />
    </ApolloProvider>
  );
};

export default App;

