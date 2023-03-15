import React from 'react'
import styles from '@/styles/Solutions.module.css';

import WhiteBand from './layouts/WhiteBand';
import Solution from './elements/Solution';
import Bonus from './elements/Bonus';
import Image from './elements/Image';

import type { SolutionsProps } from '@/types/SolutionsProps';

type Props = SolutionsProps;

export default function Solutions({ headTitle, picture, solutions, iconBonus, bonuses }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>

      </div>
    </WhiteBand>
  )
}
