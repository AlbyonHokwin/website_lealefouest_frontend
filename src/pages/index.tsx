import Head from 'next/head';
import styles from '@/styles/Home.module.css';

import Background from '@/components/elements/Background';
import Frontage from '@/components/modules/Frontage';
import Why from '@/components/modules/Why';
import Solutions from '@/components/modules/Solutions';
import Methodologies from '@/components/modules/Methodologies';
import Pricing from '@/components/modules/Pricing';
import Expectations from '@/components/modules/Expectations';
import Contact from '@/components/modules/Contact';
import OtherMedias from '@/components/modules/OtherMedias';

import { GetStaticProps } from 'next';
import { fetchSanity } from './api/fetchSanity';
import { groqQueries } from './api/groqQueries';

import type { Component } from '@/types/Component';
import type { Profile } from '@/types/Profile';
import type { FrontageProps } from '@/types/FrontageProps';
import type { WhyProps } from '@/types/WhyProps';
import type { SolutionsProps } from '@/types/SolutionsProps';
import type { MethodologiesProps } from '@/types/MethodologiesProps';
import type { PricingProps } from '@/types/PricingProps';
import type { ExpectationsProps } from '@/types/ExpectationsProps';
import type { ContactProps } from '@/types/ContactProps';
import type { OtherMediasProps } from '@/types/OtherMediasProps';
import type { SanityImage } from '@/types/SanityImage';

type Props = {
  components: Component[];
  profile: Profile;
  frontage: FrontageProps;
  why: WhyProps;
  solutions: SolutionsProps;
  methodologies: MethodologiesProps;
  pricing: PricingProps;
  expectations: ExpectationsProps;
  contact: ContactProps;
  otherMedias: OtherMediasProps;
  background: SanityImage;
}

export default function Home(props: Props) {
  const tableComponents: Record<string, JSX.Element> = {
    "Home": <Frontage {...props.frontage} firstname={props.profile.firstname} lastname={props.profile.lastname} />,
    "Why": <Why {...props.why} />,
    "Solutions": <Solutions {...props.solutions} />,
    "Methodologies": <Methodologies {...props.methodologies} />,
    "Pricing": <Pricing {...props.pricing} />,
    "Expectations": <Expectations {...props.expectations} />,
    "Contact": <Contact {...props.contact} ownerEmail={props.profile.email} />,
    "OtherMedias": <OtherMedias {...props.otherMedias} />,
  }

  const sections = props.components
    .filter(component => component.page > 0 && !!tableComponents[component.name])
    .map(component => {
      const ComponentToUse = tableComponents[component.name];
      return <section key={component.name} className={styles.section}>
        {ComponentToUse}
      </section>
    })

  return (
    <>
      <Head>
        <title>Léa Le Fouest</title>
        <meta name="description" content="Dressing détox by Léa Le Fouest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main lang='fr' className={styles.main}>
        <Background background={props.background} />
        {sections}
      </main>
    </>
  )
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const query = `{
    "components": ${groqQueries.components},
    "profile": ${groqQueries.profile},
    "frontage": ${groqQueries.home},
    "why": ${groqQueries.why},
    "solutions": ${groqQueries.solutions},
    "methodologies": ${groqQueries.methodologies},
    "pricing": ${groqQueries.pricing},
    "expectations": ${groqQueries.expectations},
    "contact": ${groqQueries.contact},
    "otherMedias": ${groqQueries.otherMedias},
    "background": ${groqQueries.background},
  }`

  const props: Props = await fetchSanity(query);

  return {
    props,
    revalidate: 10
  }
};