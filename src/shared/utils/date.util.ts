import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * [Engineering Spec 준수] 
 * 1. Pure Function: 입력된 날짜를 지정된 포맷의 문자열로 변환
 */
export const formatDateTime = (
  date: Date | string | number,
  formatStr: string = 'yyyy-MM-dd HH:mm:ss'
): string => {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  return format(d, formatStr, { locale: ko });
};

export const formatRelativeTime = (date: Date | string | number): string => {
  // 여기에 상대 시간(방금 전, 1시간 전 등) 로직 추가 가능
  return formatDateTime(date, 'yyyy-MM-dd');
};