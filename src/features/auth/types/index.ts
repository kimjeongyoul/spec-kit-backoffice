export interface User {
  id: string;
  username: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  token?: string; // JWT는 HttpOnly Cookie로 관리할 경우 생략 가능
}
