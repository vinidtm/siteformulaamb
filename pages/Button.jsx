import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';
import Script from './Script';

const Button = () => {
  return (
    <div className={`${styles.button} ${styles.show}`}>
      <Link href={'https://pay.hotmart.com/B84078433G?checkoutMode=10'}>
        <button>EU QUERO COMEÇAR A EMAGRECER HOJE</button>
      </Link>
      <Script />
    </div>
  );
};

export default Button;
