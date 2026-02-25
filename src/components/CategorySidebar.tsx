'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import styles from './CategorySidebar.module.scss';

interface CategorySidebarProps {
  selectedCategory: string | null;
  selectedSub: string | null;
}

export default function CategorySidebar({
  selectedCategory,
  selectedSub,
}: CategorySidebarProps) {
  const router = useRouter();
  const [openSlugs, setOpenSlugs] = useState<string[]>(
    selectedCategory ? [selectedCategory] : [],
  );

  function toggleAccordion(slug: string) {
    setOpenSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }

  return (
    <aside className={styles.sidebar}>
      <Link
        href="/category"
        className={`${styles.allButton} ${
          !selectedCategory ? styles.active : ''
        }`}
      >
        전체보기
      </Link>

      <ul className={styles.list}>
        {CATEGORIES.map(({ label, slug, sub }) => {
          const isOpen = openSlugs.includes(slug);
          const isCategoryActive =
            selectedCategory === slug && !selectedSub;

          return (
            <li key={slug} className={styles.item}>
              <button
                className={`${styles.categoryRow} ${
                  isCategoryActive ? styles.active : ''
                }`}
                onClick={() => {
                  toggleAccordion(slug);
                  router.push(`/category/${slug}`);
                }}
              >
                <span className={styles.category}>{label}</span>
                <span
                  className={`${styles.chevronBtn} ${
                    isOpen ? styles.chevronOpen : ''
                  }`}
                >
                  ⌵
                </span>
              </button>

              <ul
                className={`${styles.subList} ${
                  isOpen ? styles.subListOpen : ''
                }`}
              >
                {sub.map((subLabel) => (
                  <li key={subLabel}>
                    <Link
                      href={`/category/${slug}?sub=${encodeURIComponent(subLabel)}`}
                      className={`${styles.subItem} ${
                        selectedCategory === slug && selectedSub === subLabel
                          ? styles.active
                          : ''
                      }`}
                    >
                      {subLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
