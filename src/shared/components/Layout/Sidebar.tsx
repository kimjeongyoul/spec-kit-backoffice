import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import styles from './Layout.module.css';

const menuItems = [
  { label: 'Dashboard', href: '/' },
  { label: 'Specifications', href: '/specs' },
  { label: 'Settings', href: '/settings' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  styles.menuItem,
                  pathname === item.href && styles.active
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
