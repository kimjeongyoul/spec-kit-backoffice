import { NextResponse } from 'next/server';

export async function GET() {
  // 실제로는 쿠키/세션을 검증해야 하지만, Mock용으로 항상 성공 반환
  return NextResponse.json({
    user: {
      id: 'mock-user-id',
      username: 'AdminUser',
      role: 'ADMIN',
    },
  });
}
