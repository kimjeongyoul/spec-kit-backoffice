import { StateFeedback } from '@/shared/components/Feedback/StateFeedback';

/**
 * [Engineering Spec 준수] 
 * 1. Standardized Fallbacks: 존재하지 않는 페이지 접근 시 안내
 */
export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StateFeedback
        type="empty"
        title="페이지를 찾을 수 없습니다"
        description="요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다."
      />
    </main>
  );
}