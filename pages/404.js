import Layout from '@components/Layout';
import styles from '@syles/404.module.css';
export default function NotFoundPage() {
  return (
    <Layout title="Not Found Page">
      <div className={styles.error}>
        <h1>
          {' '}
          <span className={styles.suberror}>404</span> Error!
        </h1>
        <p>
          Sorry, the page you are looking for is <b>sleeping</b> on the{' '}
          <b>moon</b> 😁{' '}
        </p>
      </div>
    </Layout>
  );
}
