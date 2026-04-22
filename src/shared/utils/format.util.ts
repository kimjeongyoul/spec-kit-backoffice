/**
 * [Engineering Spec 준수] 
 * 1. Named Exports Only: 트리쉐이킹 최적화
 */
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('ko-KR').format(num);
};

export const formatCurrency = (num: number, currency: string = 'KRW'): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency,
  }).format(num);
};