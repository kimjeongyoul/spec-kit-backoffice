import React from 'react';
import styles from './StatsCard.module.css';

interface StatsCardProps {
  label: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isUp: boolean;
  };
}

export const StatsCard = ({ label, value, description, trend }: StatsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
      {(description || trend) && (
        <div className={styles.footer}>
          {trend && (
            <span className={trend.isUp ? styles.trendUp : styles.trendDown}>
              {trend.isUp ? '↑' : '↓'} {trend.value}%
            </span>
          )}
          {description && <span className={styles.description}>{description}</span>}
        </div>
      )}
    </div>
  );
};
