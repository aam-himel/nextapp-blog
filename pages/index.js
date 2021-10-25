import Link from 'next/link';
import Head from 'next/head';
import Layout from '@components/Layout';
import Header from '@components/Header';
export default function HomePage() {
  return (
    <>
      <Layout title="Home | aamHimel">
        <main>
          <h2>This is the Home page</h2>
        </main>
      </Layout>
    </>
  );
}
