import React, { useState } from 'react';
import styles from '@/styles/ContactForm.module.css';

import FormInput from '../elements/FormInput';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import RadioInput from '../elements/RadioInput';

type Inputs = {
  firstname: string;
  lastname: string;
  address: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  dressingSize: '' | 'small' | 'medium' | 'large';
};

type Props = {
  showForm: () => void;
}

const EMAIL_REGEX: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;

export default function ContactForm({ showForm }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formMethods = useForm<Inputs>({
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

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log('submit');
    // setIsLoading(true);
    // const params = { myEmail, ...data };
    // emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, params, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    //     .then(result => {
    //         if (result.text === 'OK') {
    //             alert("Votre message a bien été envoyé.");
    //             reset();
    //             setIsLoading(false);
    //         }
    //     })
    //     .catch(() => alert("Une erreur s'est produite durant l'envoi, veuillez réessayer."));
  };

  return (
    <FormProvider {...formMethods} >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <button type='button' className={styles.closeButton} onClick={showForm}>
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
            formOptions={{ required: true }}
            label='Numéro de téléphone'
            id='input-phoneNumber'
            errorMessageRequired={errorMessageRequired}
            type='text'
          />
        </div>

        <div className={styles.group}>
          <RadioInput
            formName='dressingSize'
            formOptions={{ required: true }}
            baseId='radio-dressingSize'
            name='Taille du dressing'
            radios={[
              { label: 'Petit', value: 'small' },
              { label: 'Moyen', value: 'medium' },
              { label: 'Grand', value: 'large' },
            ]}
            errorMessageRequired={errorMessageRequired}
          />
        </div>

        <button type="submit" className={styles.button}>
          Envoyer
        </button>
      </form>
    </FormProvider>
  );
}
