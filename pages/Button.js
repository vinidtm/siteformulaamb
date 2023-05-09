import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

const Button = () => {
  return (
    <div className={`${styles.button} ${styles.show}`}>
        <Link href={"https://pay.kiwify.com.br/hEB0eI7"}>
      <button>EU QUERO COMEÇAR A EMAGRECER HOJE</button>
      </Link>
    </div>
  );
};

export default Button;
