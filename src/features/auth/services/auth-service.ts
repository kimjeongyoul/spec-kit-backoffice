import { apiClient } from '@/shared/services/api-client';
import { AuthResponse } from '../types';

/**
 * [Engineering Spec 준수]
 * 1. Authentication Service: Login/Logout API 연동
 * 2. Response Handling: Axios Interceptor에서 공통 처리
 */
export const authService = {
  login: async (credentials: Record<string, string>): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>('/api/v1/auth/login', credentials);
    return response.data;
  },

  logout: async (): Promise<void> => {
    await apiClient.post('/api/v1/auth/logout');
  },

  getCurrentUser: async (): Promise<AuthResponse> => {
    const response = await apiClient.get<AuthResponse>('/api/v1/auth/me');
    return response.data;
  },
};
