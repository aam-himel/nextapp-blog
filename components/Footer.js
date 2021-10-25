import styles from '@syles/Footer.module.css';

export default function Footer() {
  const date = new Date();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>{date.getFullYear()} &copy; Hdev. All right reserved.</p>
      </div>
    </footer>
  );
}
