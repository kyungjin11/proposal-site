'use client';

import CategorySidebar from '@/components/CategorySidebar';
import ProposalGrid from '@/components/ProposalGrid';
import proposals from '@/data/proposals.json';
import styles from './page.module.scss';

export default function CategoryPage() {
  return (
    <div className={styles.layout}>
      <CategorySidebar selectedCategory={null} selectedSub={null} />
      <section className={styles.content}>
        <h1 className={styles.heading}>전체 제안서</h1>
        <ProposalGrid proposals={proposals} />
      </section>
    </div>
  );
}
