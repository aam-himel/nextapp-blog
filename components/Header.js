import styles from '@syles/Header.module.css';
import Link from 'next/link';
import { navitems } from 'constant/navitems';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a className={styles.logo}>Hdev</a>
        </Link>
      </div>
      <nav>
        {navitems.map((item) => (
          <Link href={item.url}>
            <a className={`${styles.linkItem}`}>{item.text}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
