import React from 'react';
import { useRouter } from 'next/router';
import styles from './Button.module.css';
import Link from 'next/link';
import Script from './Script';

const Button = () => {
  const router = useRouter();

  let link;
  if (router.pathname === '/') {
    link = 'https://pay.hotmart.com/B84078433G?checkoutMode=10';
  } else {
    link = 'https://pay.hotmart.com/U84703526S?off=n84kabcl&checkoutMode=10';
  }

  return (
    <div className={`${styles.button} ${styles.show}`}>
      <Link href={link}>
        <button>
          {router.pathname === '/'
            ? 'EU QUERO COMEÇAR A EMAGRECER HOJE'
            : 'QUIERO EMPEZAR A ADELGAZAR HOY.'}
        </button>
      </Link>
      <Script />
    </div>
  );
};

export default Button;
