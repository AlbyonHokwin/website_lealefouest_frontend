import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import { GetStaticProps } from 'next';
import { fetchSanity } from './api/fetchSanity';
import { groqQueries } from './api/groqQueries';

import type { Profile } from '@/types/Profile';
import type { Home } from '@/types/Home';
import type { Why } from '@/types/Why';
import type { Solutions } from '@/types/Solutions';
import type { Methodologies } from '@/types/Methodologies';
import type { Pricing } from '@/types/Pricing';
import type { Expectations } from '@/types/Expectations';
import type { Contact } from '@/types/Contact';
import type { OtherMedias } from '@/types/OtherMedias';
import { Component } from '@/types/Component';

type Props = {
  components: Component[];
  profile: Profile;
  home: Home;
  why: Why;
  solutions: Solutions;
  methodologies: Methodologies;
  pricing: Pricing;
  expectations: Expectations;
  contact: Contact;
  otherMedias: OtherMedias;
}

export default function Home(props: Props) {
  const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>
  getKeys(props).forEach(key => console.log(key, props[key]));

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
  const query = `{
    "components": ${groqQueries.components},
    "profile": ${groqQueries.profile},
    "home": ${groqQueries.home},
    "why": ${groqQueries.why},
    "solutions": ${groqQueries.solutions},
    "methodologies": ${groqQueries.methodologies},
    "pricing": ${groqQueries.pricing},
    "expectations": ${groqQueries.expectations},
    "contact": ${groqQueries.contact},
    "otherMedias": ${groqQueries.otherMedias},
  }`

  const props: Props = await fetchSanity(query);

  return {
    props,
    revalidate: 10
  }
};