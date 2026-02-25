import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './layout.module.scss';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
