import { Storage } from '../storage/storage';

export const initializeApp = async (): Promise<boolean> => {
  try {
    const token = await Storage.getToken();

    return !!token;
  } catch (error) {
    console.log('Splash Initialization Error:', error);
    return false;
  }
};
