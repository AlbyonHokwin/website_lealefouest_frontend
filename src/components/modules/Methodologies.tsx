import React from 'react'
import styles from '@/styles/Methodologies.module.css';

import WhiteBand from '../layouts/WhiteBand';
import Method from '../elements/Method';

import type { MethodologiesProps } from '@/types/MethodologiesProps';

type Props = MethodologiesProps;

export default function Methodologies({ headTitle, methods }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>
        {methods.map(method => <Method key={method.name} {...method} />)}
      </div>
    </WhiteBand>
  )
}
