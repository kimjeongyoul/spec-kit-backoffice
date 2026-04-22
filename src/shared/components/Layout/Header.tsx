import React from 'react';
import { useAuth } from '@/features/auth/hooks/use-auth';
import { Button } from '@/shared/components/Button/Button';
import styles from './Layout.module.css';

export const Header = () => {
  const { user, logout, isLoggingOut } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <h1>Spec-Kit</h1>
        </div>
        <div className={styles.userInfo}>
          {user && (
            <>
              <span className={styles.username}>{user.username}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => logout()}
                isLoading={isLoggingOut}
              >
                Logout
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
