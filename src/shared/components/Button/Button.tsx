import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * [Engineering Spec 준수] 
 * 1. Action Protection: isLoading 상태 시 중복 클릭 방지 (disabled 처리)
 */
export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  children,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className={styles.spinner} aria-hidden="true" />}
      {!isLoading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.content}>{children}</span>
      {!isLoading && rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};