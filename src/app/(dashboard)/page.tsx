import styles from './page.module.css';
import { StatsCard } from '@/features/specs/components/StatsCard';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome back, Admin</h1>
        <p className={styles.subtitle}>Here's what's happening with your projects today.</p>
      </header>

      <div className={styles.statsGrid}>
        <StatsCard 
          label="Total Specifications" 
          value="124" 
          trend={{ value: 12, isUp: true }}
          description="from last month"
        />
        <StatsCard 
          label="Pending Review" 
          value="18" 
          description="Requires your attention"
        />
        <StatsCard 
          label="Published This Week" 
          value="7" 
          trend={{ value: 4, isUp: true }}
          description="High productivity"
        />
        <StatsCard 
          label="Active Contributors" 
          value="32" 
          description="Across 5 teams"
        />
      </div>

      <div className={styles.recentSection}>
        <div className={styles.sectionHeader}>
          <h2>Recent Activity</h2>
          <button className={styles.viewAll}>View all</button>
        </div>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityDot} />
            <div className={styles.activityContent}>
              <strong>David Kim</strong> updated <em>Payment Gateway Integration</em> to <code>v0.9.5</code>
              <span>2 hours ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityDot} />
            <div className={styles.activityContent}>
              <strong>Sarah Lee</strong> created a new draft <em>Mobile App Push Notification</em>
              <span>5 hours ago</span>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityDot} />
            <div className={styles.activityContent}>
              <strong>System</strong> auto-published <em>Inventory Management Blueprint</em>
              <span>Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
