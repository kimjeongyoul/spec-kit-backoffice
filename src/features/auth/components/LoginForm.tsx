'use client';

import React, { useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import { Button } from '@/shared/components/Button/Button';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoggingIn, loginError } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Spec-Kit</h2>
      <p className={styles.subtitle}>AI-Driven Enterprise Management</p>
      
      <div className={styles.field}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="username"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
      </div>

      {loginError && (
        <div className={styles.error}>
          {(loginError as any).response?.data?.message || '로그인에 실패했습니다.'}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isLoggingIn}
        className={styles.submitButton}
      >
        Sign In
      </Button>
    </form>
  );
};
