import React from 'react';
import styles from '@/styles/FormInput.module.css';
import { useFormContext } from 'react-hook-form';

import type { RegisterOptions } from 'react-hook-form';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement> & {
  formName: string;
  formOptions: RegisterOptions;
  label: string;
  id: string;
  errorMessageRequired?: string;
  errorMessagePattern?: string;
  errorMessageLength?: string;
  isTextarea?: boolean;
}

export default function FormInput({
  formName,
  formOptions,
  label,
  id,
  errorMessageRequired,
  errorMessagePattern = '',
  errorMessageLength = '',
  isTextarea = false,
  ...rest
}: Props) {
  const { register, watch, formState: { errors } } = useFormContext();
  const value = watch(formName);
  const error = errors[formName];

  const attributes = {
    className: `${isTextarea ? styles.textarea : styles.input} ${error ? styles.error : ''} ${value ? styles.filled : ''}`,
    id,
    ...register(formName, formOptions),
    'aria-invalid': error ? true : false,
    ...rest,
  }

  return (
    <div className={styles.container}>
      {isTextarea ?
        <textarea {...attributes} /> :
        <input {...attributes} />
      }
      <label htmlFor={id} className={styles.label}>{label}</label>
      {error && <div className={styles.errorMessage}>
        {
          error.type === 'required' ?
            errorMessageRequired :
            error.type === 'pattern' ?
              errorMessagePattern :
              error.type === 'maxLength' ?
                errorMessageLength :
                ''
        }
      </div>}
    </div>
  );
};
