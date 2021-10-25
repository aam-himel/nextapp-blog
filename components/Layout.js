import Head from 'next/head';
import styles from '@syles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Nextjs | default title',
  description: 'The fastest react freameworks for production',
  keywords: 'nextjs, js, react',
};
