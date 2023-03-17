import React, { useEffect, useState } from 'react';
import styles from '@/styles/Contact.module.css';

import Image from '../elements/Image';
import Comment from '../elements/Comment';
import ContactForm from './ContactForm';

import type { ContactProps } from '@/types/ContactProps';

type Props = ContactProps

export default function Contact({ headTitle, picture, buttonText, comments }: ContactProps) {
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [formIsDisplayed, setFormIsDisplayed] = useState<boolean>(false);

  useEffect(() => {
    comments && setRandomIndex(Math.floor(Math.random() * comments.length));
  }, [comments])

  const showForm = () => {
    setFormIsDisplayed(!formIsDisplayed);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.picture}>
          <Image image={picture} objectFit='cover' maxSize={400} />
        </div>

        {formIsDisplayed && <div className={`${styles.form} ${formIsDisplayed ? styles.visible : styles.hidden}`}>
          <ContactForm showForm={showForm} />
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