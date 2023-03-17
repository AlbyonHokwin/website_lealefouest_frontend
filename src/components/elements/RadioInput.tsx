import React from 'react';
import styles from '@/styles/RadioInput.module.css';
import { useFormContext } from 'react-hook-form';

import type { RegisterOptions } from 'react-hook-form';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type Radio = {
  label: string;
  value: string;
}

type Props = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement> & {
  formName: string;
  formOptions: RegisterOptions;
  baseId: string;
  name: string;
  radios: Radio[];
  errorMessageRequired?: string;
}

export default function RadioInput({
  formName,
  formOptions,
  baseId,
  name,
  radios,
  errorMessageRequired,
  ...rest
}: Props) {
  const { register, watch, formState: { errors } } = useFormContext();
  const value = watch(formName);
  const error = errors[formName];

  const commonAttributes = {
    className: `${styles.radioInput} ${error ? styles.error : ''}`,
    ...register(formName, formOptions),
    'aria-invalid': error ? true : false,
    type: 'radio',
    ...rest,
  }

  return (
    <div className={styles.container}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{name} :</legend>
        <div className={styles.radios}>
          {radios.map((radio, i) => {
            const radioId = `${baseId}-${radio.value}`;
            return (
              <div key={radioId} className={styles.radio}>
                <input {...commonAttributes} id={radioId} value={radio.value} />
                <label htmlFor={radioId}>{radio.label}</label>
              </div>
            );
          })}
        </div>
        {error && <div className={styles.errorMessage}>
          {
            error.type === 'required' ?
              errorMessageRequired :
              ''
          }
        </div>}
      </fieldset>
    </div>
  );
};
