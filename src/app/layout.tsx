import type { Metadata } from 'next';
import { ReactQueryProvider } from '@/shared/providers/ReactQueryProvider';
import { IdleTimerProvider } from '@/shared/providers/IdleTimerProvider';
import '../styles/variables.css';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Spec-Kit Backoffice',
  description: 'AI-Driven Enterprise Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <IdleTimerProvider>
            {children}
          </IdleTimerProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}