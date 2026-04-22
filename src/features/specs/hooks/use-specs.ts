import { useQuery } from '@tanstack/react-query';
import { specService } from '../services/spec-service';

export const useSpecs = (params?: Record<string, any>) => {
  return useQuery({
    queryKey: ['specs', params],
    queryFn: () => specService.getSpecs(params),
  });
};
