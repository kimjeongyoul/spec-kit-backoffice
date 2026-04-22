import { LoginForm } from '@/features/auth/components/LoginForm';
import styles from './page.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm />
      </div>
    </div>
  );
}
