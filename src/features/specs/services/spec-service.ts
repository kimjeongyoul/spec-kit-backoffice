import { apiClient } from '@/shared/services/api-client';
import { SpecListResponse, Specification } from '../types';

export const specService = {
  getSpecs: async (params?: Record<string, any>): Promise<SpecListResponse> => {
    const response = await apiClient.get<SpecListResponse>('/api/v1/specs', { params });
    return response.data;
  },

  getSpecById: async (id: string): Promise<Specification> => {
    const response = await apiClient.get<Specification>(`/api/v1/specs/${id}`);
    return response.data;
  },
};
