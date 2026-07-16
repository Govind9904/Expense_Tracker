import api from './axios'; // your existing axios instance

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  msg: string;
  token: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface RegisterResponse {
  message: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}

export const login = async (
  data: LoginRequest,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    '/auth/login',
    data,
  );

  return response.data;
};

export const register = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    '/auth/register',
    data,
  );

  return response.data;
};

export const logout = async (): Promise<{ msg: string }> => {
  const response = await api.post('/auth/logout');

  return response.data;
};
