import React, { useState } from 'react';
import styles from '@/styles/ContactForm.module.css';

import FormInput from '../elements/FormInput';
import RadioInput from '../elements/RadioInput';
import SpinnerIcon from '../elements/SpinnerIcon';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import type { Profile } from '@/types/Profile';
import type { FormInputs, DressingSize } from '@/types/FormInputs';

const dressingSizes: DressingSize[] = [
  { label: 'Petit', value: 'small' },
  { label: 'Moyen', value: 'medium' },
  { label: 'Grand', value: 'large' },
];

const EMAIL_REGEX: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const FRENCHPHONENUMBER_REGEX: RegExp = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

type Props = {
  showForm: () => void;
  ownerEmail: Profile['email'];
}

export default function ContactForm({ showForm, ownerEmail }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formMethods = useForm<FormInputs>({
    defaultValues: {
      firstname: '',
      lastname: '',
      address: '',
      zipCode: '',
      city: '',
      phoneNumber: '',
      email: '',
      dressingSize: '',
    }
  });

  const { handleSubmit, reset } = formMethods;

  const errorMessageRequired: string = 'Requis !';

  const onSubmit: SubmitHandler<FormInputs> = data => {
    // console.log(`submit at ${ownerEmail}`);
    // console.log(data);
    setIsLoading(true);
    const dressingSizeLabel = dressingSizes.find(size => size.value === data.dressingSize)?.label;

    const params = { ownerEmail, ...data, dressingSize: dressingSizeLabel }
    emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', params, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then(result => {
        if (result.text === 'OK') {
          alert("Votre message a bien été envoyé.");
          reset();
          setIsLoading(false);
        }
      })
      .catch(() => {
        alert("Une erreur s'est produite durant l'envoi, veuillez réessayer.");
        setIsLoading(false);
      });
  };

  return (
    <FormProvider {...formMethods} >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <button type='button' className={styles.closeButton} onClick={showForm} disabled={isLoading}>
          X
        </button>

        <div className={`${styles.dualInputs} ${styles.group}`}>
          <div className={styles.childInputFlex1}>
            <FormInput
              formName='firstname'
              formOptions={{ required: true, maxLength: 80 }}
              label='Prénom'
              id='input-firstname'
              errorMessageRequired={errorMessageRequired}
              type='text'
            />
          </div>

          <div className={styles.childInputFlex1}>
            <FormInput
              formName='lastname'
              formOptions={{ required: true, maxLength: 80 }}
              label='Nom'
              id='input-lastname'
              errorMessageRequired={errorMessageRequired}
              type='text'
            />
          </div>
        </div>

        <div className={styles.group}>
          <FormInput
            formName='address'
            formOptions={{ required: true }}
            label='Adresse'
            id='input-address'
            errorMessageRequired={errorMessageRequired}
            type='text'
          />

          <div className={styles.dualInputs}>
            <div className={styles.childInputFlex1}>
              <FormInput
                formName='zipCode'
                formOptions={{ required: true, maxLength: 5 }}
                label='Code postal'
                id='input-zipCode'
                errorMessageRequired={errorMessageRequired}
                errorMessageLength='Trop de chiffres'
                type='number'
              />
            </div>

            <div className={styles.childInputFlex2}>
              <FormInput
                formName='city'
                formOptions={{ required: true, maxLength: 80 }}
                label='Ville'
                id='input-city'
                errorMessageRequired={errorMessageRequired}
                type='text'
              />
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <FormInput
            formName='email'
            formOptions={{ required: true, pattern: EMAIL_REGEX }}
            label='E-mail'
            id='input-email'
            errorMessageRequired={errorMessageRequired}
            errorMessagePattern='Saisissez une adresse-email valide'
            type='email'
          />
        </div>

        <div className={styles.group}>
          <FormInput
            formName='phoneNumber'
            formOptions={{ required: true, pattern: FRENCHPHONENUMBER_REGEX }}
            label='Numéro de téléphone'
            id='input-phoneNumber'
            errorMessageRequired={errorMessageRequired}
            errorMessagePattern='Veuillez utiliser un numéro français'
            type='text'
          />
        </div>

        <div className={styles.group}>
          <RadioInput
            formName='dressingSize'
            formOptions={{ required: true }}
            baseId='radio-dressingSize'
            name='Taille du dressing'
            radios={dressingSizes}
            errorMessageRequired={errorMessageRequired}
          />
        </div>

        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading && <SpinnerIcon />} Envoyer
        </button>
      </form>
    </FormProvider>
  );
}
