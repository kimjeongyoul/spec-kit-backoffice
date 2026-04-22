'use client';

import React from 'react';
import { Button } from '../Button/Button';
import styles from './StateFeedback.module.css';

interface StateFeedbackProps {
  type: 'empty' | 'error' | 'unauthorized';
  title?: string;
  description?: string;
  onRetry?: () => void;
  onGoHome?: () => void;
}

/**
 * [Engineering Spec 준수] 
 * 1. Standardized Fallbacks: Empty/Error 상황의 일관된 UI 제공
 */
export const StateFeedback = ({
  type,
  title,
  description,
  onRetry,
  onGoHome,
}: StateFeedbackProps) => {
  const configs = {
    empty: {
      defaultTitle: '데이터가 없습니다',
      defaultDescription: '표시할 내용이 없습니다.',
      icon: '📁',
    },
    error: {
      defaultTitle: '문제가 발생했습니다',
      defaultDescription: '관리자에게 문의하거나 다시 시도해주세요.',
      icon: '⚠️',
    },
    unauthorized: {
      defaultTitle: '권한이 없습니다',
      defaultDescription: '이 페이지에 접근할 수 있는 권한이 없습니다.',
      icon: '🚫',
    },
  };

  const config = configs[type];

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{config.icon}</div>
      <h2 className={styles.title}>{title || config.defaultTitle}</h2>
      <p className={styles.description}>{description || config.defaultDescription}</p>
      
      <div className={styles.actions}>
        {onRetry && (
          <Button variant="primary" onClick={onRetry}>
            다시 시도
          </Button>
        )}
        <Button variant="outline" onClick={onGoHome || (() => window.location.href = '/')}>
          메인으로 이동
        </Button>
      </div>
    </div>
  );
};