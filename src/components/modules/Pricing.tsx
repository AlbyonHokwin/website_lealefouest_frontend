import React from 'react';
import styles from '@/styles/Pricing.module.css';

import WhiteBand from '../layouts/WhiteBand';
import Icon from '../elements/Icon';
import Reason from '../elements/Reason';

import type { PricingProps } from '@/types/PricingProps';

type Props = PricingProps

export default function Pricing({ headTitle, price, motivation, icon, reasons }: Props) {
  return (
    <WhiteBand headTitle={headTitle}>
      <div className={styles.container}>
        <div className={styles.priceContainer}>
          <h4 className={styles.price}>
            {price} € <span>TTC</span>
          </h4>

          <div className={styles.divider} />

          <p className={styles.motivation}>
            {motivation}
          </p>
        </div>

        <div className={styles.reasonsContainer}>
          <div className={styles.iconContainer}>
            <Icon icon={icon} objectFit='contain' useAccentColor />
          </div>

          <ul className={styles.reasons}>
            {reasons.map((reason, i) => <Reason key={i} reason={reason} />)}
          </ul>
        </div>
      </div>
    </WhiteBand>
  );
}
