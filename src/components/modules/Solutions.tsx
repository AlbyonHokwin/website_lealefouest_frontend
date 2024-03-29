import React from 'react';
import styles from '@/styles/Solutions.module.css';

import WhiteBand from '../layouts/WhiteBand';
import Solution from '../elements/Solution';
import Bonus from '../elements/Bonus';
import CustomImage from '../elements/CustomImage';

import type { SolutionsProps } from '@/types/SolutionsProps';

type Props = SolutionsProps;

export default function Solutions({ headTitle, picture, solutions, iconBonus, bonuses }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <CustomImage
            image={picture}
            objectFit='cover'
            maxSize={400}
          />
        </div>

        <ul className={styles.solutions}>
          <li>
            <ul>
              {solutions.map((solution, i) => <Solution key={i} solution={solution} />)}
            </ul>
          </li>
          <li>
            <ul>
              {!!bonuses.length &&
                bonuses.map((bonus, i) => <Bonus key={i} icon={iconBonus} bonus={bonus} />)
              }
            </ul>
          </li>
        </ul>

      </div>
    </WhiteBand>
  )
}
