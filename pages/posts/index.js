import Layout from '@components/Layout';
import Link from 'next/link';
export default function PostsPage() {
  return (
    <Layout>
      <h1>Displaying Posts....</h1>
      <p>Post 1</p>
      <p>Post 2 </p>
      <Link href="/">
        <a>Go Home </a>
      </Link>
      <p>Post 3</p>
    </Layout>
  );
}
