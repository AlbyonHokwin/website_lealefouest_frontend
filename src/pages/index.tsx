import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Léa Le Fouest</title>
        <meta name="description" content="Dressing détox by Léa Le Fouest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      </main>
    </>
  )
};

