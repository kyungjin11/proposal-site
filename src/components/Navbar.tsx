'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/data/categories';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <header className={`${styles.navbar} ${isHome ? styles.dark : styles.light}`}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoImage}
            src={isHome ? '/proposals/logo1.png' : '/proposals/logo.png'}
            alt="SignalDecode 로고"
            width={180}
            height={48}
            priority
          />
        </Link>

        <nav
          className={styles.nav}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className={styles.navLinks}>
            <Link href="/category/" className={styles.navLink}>
              전체보기
            </Link>
            {CATEGORIES.map(({ label, slug }) => (
              <Link key={slug} href={`/category/${slug}`} className={styles.navLink}>
                {label}
              </Link>
            ))}
          </div>

          <div className={`${styles.megaDropdown} ${dropdownOpen ? styles.megaDropdownOpen : ''}`}>
            {CATEGORIES.map(({ label, slug, sub }) => (
              <div key={slug} className={styles.megaColumn}>
                <Link href={`/category/${slug}`} className={styles.megaHeader} onClick={() => setDropdownOpen(false)}>
                  {label}
                  <span className={styles.chevron}>›</span>
                </Link>
                <ul className={styles.megaList}>
                  {sub.map((subLabel) => (
                    <li key={subLabel}>
                      <Link href={`/category/${slug}?sub=${encodeURIComponent(subLabel)}`} className={styles.megaItem} onClick={() => setDropdownOpen(false)}>
                        {subLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <a
          href="https://pf.kakao.com/_axiGhX"
          className={styles.contact}
          target="_blank"
          rel="noopener noreferrer"
        >
          문의하기
        </a>
      </header>
    </div>
  );
}
