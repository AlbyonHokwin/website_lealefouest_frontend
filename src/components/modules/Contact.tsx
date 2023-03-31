import React, { useEffect, useState } from 'react';
import styles from '@/styles/Contact.module.css';

import CustomImage from '../elements/CustomImage';
import Comment from '../elements/Comment';
import ContactForm from './ContactForm';

import type { Profile } from '@/types/Profile';
import type { ContactProps } from '@/types/ContactProps';

type Props = ContactProps & {
  ownerEmail: Profile['email'];
}

export default function Contact({ headTitle, picture, buttonText, comments, ownerEmail }: Props) {
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [formIsDisplayed, setFormIsDisplayed] = useState<boolean>(false);

  useEffect(() => {
    comments && setRandomIndex(Math.floor(Math.random() * comments.length));
  }, [comments])

  const showForm = () => {
    setFormIsDisplayed(!formIsDisplayed);
  }

  return (
    <div id='contact' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.picture}>
          <CustomImage image={picture} objectFit='cover' maxSize={500} />
        </div>

        {formIsDisplayed && <div className={`${styles.form} ${formIsDisplayed ? styles.visible : styles.hidden}`}>
          <ContactForm showForm={showForm} ownerEmail={ownerEmail}/>
        </div>}

        {comments && !formIsDisplayed &&
          <div className={styles.comment}>
            <Comment {...comments[randomIndex]} />
          </div>}

        {!formIsDisplayed && <div className={`${styles.buttonContainer}`}>
          <button className={styles.button} onClick={showForm}>
            {buttonText}
          </button>
        </div>}
      </div>
    </div>
  );
}
