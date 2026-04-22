'use client';

import React from 'react';
import { useSpecs } from '../hooks/use-specs';
import { Button } from '@/shared/components/Button/Button';
import styles from './SpecList.module.css';

export const SpecList = () => {
  const { data, isLoading, error } = useSpecs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading specifications</div>;

  const specs = data?.content || [];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Specifications</h2>
        <Button variant="primary" size="sm">Create New</Button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Version</th>
              <th>Status</th>
              <th>Author</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {specs.length === 0 ? (
              <tr>
                <td colSpan={5} className={styles.empty}>No specifications found</td>
              </tr>
            ) : (
              specs.map((spec) => (
                <tr key={spec.id}>
                  <td style={{ fontWeight: 600 }}>{spec.title}</td>
                  <td><code style={{ background: 'var(--color-divider)', padding: '2px 4px', borderRadius: '4px' }}>v{spec.version}</code></td>
                  <td>
                    <span className={`${styles.status} ${styles[spec.status.toLowerCase()]}`}>
                      {spec.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.author}>
                      <span className={styles.authorIcon}>
                        {spec.author.charAt(0)}
                      </span>
                      {spec.author}
                    </div>
                  </td>
                  <td style={{ color: 'var(--color-text-muted)' }}>
                    {new Date(spec.updatedAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
