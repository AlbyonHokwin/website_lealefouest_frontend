import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { GetStaticProps } from 'next';
import { groq } from 'next-sanity';
import { fetchSanity } from './api/fetchSanity';

import type { Profile } from '@/types/Profile';
import type { Home } from '@/types/Home';
import type { Why } from '@/types/Why';

type Props = {
  profile: Profile;
  home: Home;
  why: Why;
}

export default function Home(props: Props) {
  // Object.keys(props).forEach(key => console.log(key, props[key]));

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

export const getStaticProps: GetStaticProps<Props> = async () => {
  type PropsArray = [
    Profile,
    Home,
    Why,
  ];

  const [
    profile,
    home,
    why,
  ]: PropsArray = await Promise.all([
    fetchSanity(groq`*[_type == "profile"]{firstname, lastname, email, picture->}[0]`),
    fetchSanity(groq`*[_type == "home"]{component->{name, page}, introductory, picture->}[0]`),
    fetchSanity(groq`*[_type == "why"]{component->{name, page}, headTitle, shockPhrase, causes[] {name, icon->}}[0]`),
  ])

  return {
    props: {
      profile,
      home,
      why,
    },
    revalidate: 10
  }
};