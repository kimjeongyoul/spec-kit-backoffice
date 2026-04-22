import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  // 가짜 로그인 성공 처리
  return NextResponse.json({
    user: {
      id: 'mock-user-id',
      username: body.username || 'AdminUser',
      role: 'ADMIN',
    },
    token: 'mock-jwt-token',
  });
}
