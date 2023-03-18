import React from 'react'
import styles from '@/styles/Solutions.module.css';

import WhiteBand from '../layouts/WhiteBand';
import Solution from '../elements/Solution';
import Bonus from '../elements/Bonus';
import Image from '../elements/Image';

import type { SolutionsProps } from '@/types/SolutionsProps';

type Props = SolutionsProps;

export default function Solutions({ headTitle, picture, solutions, iconBonus, bonuses }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <Image
            image={picture}
            objectFit='cover'
            maxSize={400}
          />
        </div>

        <ul className={styles.solutions}>
          <ul>
            {solutions.map((solution, i) => <Solution key={i} solution={solution} />)}
          </ul>
          <ul>
            {!!bonuses.length &&
              bonuses.map((bonus, i) => <Bonus key={i} icon={iconBonus} bonus={bonus} />)
            }
          </ul>
        </ul>

      </div>
    </WhiteBand>
  )
}
