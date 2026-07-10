import { NavigatorScreenParams } from '@react-navigation/native';

/**
 * Authentication Stack
 */
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

/**
 * Bottom Tab
 */

export type BottomTabParamList = {
  Home: undefined;
  Expenses: undefined;
  Reports: undefined;
  Profile: undefined;
};

/**
 * Main App Stack
 */

export type AppStackParamList = {
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
};

/**
 * Root Stack
 */
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<AppStackParamList>;
};
