import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  TOKEN: 'AUTH_TOKEN',
  USER: 'AUTH_USER',
};

export const Storage = {
  async setToken(token: string): Promise<void> {
    await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
  },

  async getToken(): Promise<string | null> {
    return await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
  },

  async removeToken(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.TOKEN);
  },

  async setUser(user: object): Promise<void> {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER,
      JSON.stringify(user),
    );
  },

  async getUser<T>(): Promise<T | null> {
    const user = await AsyncStorage.getItem(STORAGE_KEYS.USER);

    if (!user) return null;

    return JSON.parse(user);
  },

  async removeUser(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER);
  },

  async clearAll(): Promise<void> {
    await AsyncStorage.removeMany([
      STORAGE_KEYS.TOKEN,
      STORAGE_KEYS.USER,
    ]);
  },
};
