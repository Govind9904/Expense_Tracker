import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const isLoggedIn = false;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen
          name="App"
          component={() => null}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;