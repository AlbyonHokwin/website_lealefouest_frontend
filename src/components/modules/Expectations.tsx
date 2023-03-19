import React from 'react';
import styles from '@/styles/Expectations.module.css';

import WhiteBand from '../layouts/WhiteBand';
import Expectation from '../elements/Expectation';

import type { ExpectationsProps } from '@/types/ExpectationsProps';

type Props = ExpectationsProps;

export default function Expectations({ headTitle, expectations }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>
        {expectations.map(expectation => <Expectation key={expectation.text} {...expectation} />)}
      </div>
    </WhiteBand>
  );
}
