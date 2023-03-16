import React from 'react'
import styles from '@/styles/Why.module.css';

import WhiteBand from '../layouts/WhiteBand';
import Cause from '../elements/Cause';
import { PortableText } from '@portabletext/react';

import type { WhyProps } from '@/types/WhyProps';

type Props = WhyProps;

export default function Why({ headTitle, shockPhrase, causes }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>

        <div className={styles.shockPhraseContainer}>
          <PortableText
            value={shockPhrase.text}
            components={{
              block: {
                normal: (props) => (
                  <h4 className={styles.shockPhrase}>
                    {props.value.children.map((child, i) => (
                      <div key={i} className={child.marks.map((mark: string) => styles[mark])}>
                        {child.text}
                      </div>
                    ))}
                  </h4>
                )
              },
            }}
          />
        </div>

        <div className={styles.causes}>
          {causes.map(cause => <Cause key={cause.name} {...cause} />)}
        </div>
      </div>
    </WhiteBand>
  );
}
