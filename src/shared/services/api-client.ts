import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

/**
 * [Engineering Spec 준수]
 * 1. Distributed Tracing: X-Trace-ID 자동 생성 및 주입
 * 2. HttpOnly Cookie: withCredentials 설정
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL !== undefined 
    ? process.env.NEXT_PUBLIC_API_URL 
    : 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const traceId = uuidv4();
  config.headers['X-Trace-ID'] = traceId;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    /**
     * [Engineering Spec 준수]
     * 1. API Interaction Errors: 에러 로그 수집 API 호출 (추후 구현)
     * 2. Global UX: 401/403 등 공통 에러 처리 로직
     */
    console.error(`[API Error] ${error.config?.url}`, error.response?.data);
    return Promise.reject(error);
  }
);