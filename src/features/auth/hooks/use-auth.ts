import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService } from '../services/auth-service';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      queryClient.setQueryData(['currentUser'], data.user);
      router.push('/');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.setQueryData(['currentUser'], null);
      router.push('/login');
    },
  });

  const { data: user, isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await authService.getCurrentUser();
      return response.user;
    },
    retry: false,
    staleTime: Infinity,
  });

  return {
    user,
    isLoading,
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    loginError: loginMutation.error,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
};
