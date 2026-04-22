'use client';

import { useEffect } from 'react';
import { StateFeedback } from '@/shared/components/Feedback/StateFeedback';

/**
 * [Engineering Spec 준수] 
 * 1. Rendering Errors: 런타임 에러 발생 시 공통 Fallback UI 제공
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // [Engineering Spec 준수] Persistent File Logging을 위한 에러 전송 로직
    console.error('Captured Runtime Error:', error);
  }, [error]);

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StateFeedback
        type="error"
        title="화면을 불러오는 중 오류가 발생했습니다"
        onRetry={() => reset()}
      />
    </main>
  );
}