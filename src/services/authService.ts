import { logout as logoutApi } from '../api/authApi';
import { Storage } from '../storage/storage';

export const logoutUser = async (): Promise<void> => {
  try {
    await logoutApi();
  } catch (error) {
    console.log('Logout API Error:', error);
  } finally {
    await Storage.removeToken();

    await Storage.removeUser();
  }
};
