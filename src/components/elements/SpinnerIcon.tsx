import React from 'react';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

type Props = {
  options?: Omit<FontAwesomeIconProps, 'icon'>;
}

export default function SpinnerIcon({ options }: Props) {
  return (
    <FontAwesomeIcon icon={faSpinner} spinPulse {...options} />
  )
}
