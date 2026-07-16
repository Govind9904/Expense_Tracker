import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import SplashScreen from '../screens/splash';
import { RootStackParamList } from './types';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { restoreSession } from '../redux/slices/authSlice';
import { Storage } from '../storage/storage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restore = async () => {
      try {
        const token = await Storage.getToken();

        if (token) {
          dispatch(
            restoreSession({
              token,
            }),
          );
        }
      } catch (error) {
        console.log('Restore session error', error);
      } finally {
        setLoading(false);
      }
    };

    restore();
  }, [dispatch]);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isAuthenticated ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
