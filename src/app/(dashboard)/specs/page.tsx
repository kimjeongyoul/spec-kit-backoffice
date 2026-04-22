import { SpecList } from '@/features/specs/components/SpecList';

export default function SpecsPage() {
  return (
    <div>
      <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>Specification Management</h1>
      <SpecList />
    </div>
  );
}
