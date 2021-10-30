import styles from '@syles/Showcase.module.css';
export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <h1>
        Welcome to the <span>Hdev</span> world!
      </h1>
      <p>A developer world, where you can find everything at one place!</p>
    </div>
  );
}
