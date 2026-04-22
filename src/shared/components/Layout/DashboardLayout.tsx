'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/features/auth/hooks/use-auth';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import styles from './Layout.module.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner} />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.mainWrapper}>
        <Sidebar />
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};
