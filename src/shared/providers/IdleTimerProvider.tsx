'use client';

import React, { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface IdleTimerProviderProps {
  children: React.ReactNode;
  timeoutMs?: number; // 기본 30분 (Engineering Spec 준수)
}

/**
 * [Engineering Spec 준수] 
 * 1. Idle Session Management: 활동이 없을 경우 자동 리다이렉트
 */
export const IdleTimerProvider = ({
  children,
  timeoutMs = 30 * 60 * 1000, 
}: IdleTimerProviderProps) => {
  const router = useRouter();

  const handleIdle = useCallback(() => {
    // 세션 만료 로그를 남기거나 서버에 알릴 수 있음
    console.warn('User idle for too long. Redirecting...');
    router.push('/'); 
  }, [router]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleIdle, timeoutMs);
    };

    // 활동 감지 이벤트
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [handleIdle, timeoutMs]);

  return <>{children}</>;
};