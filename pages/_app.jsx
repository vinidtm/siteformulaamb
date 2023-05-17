import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/global.css';

const pageTitles = {
  '/': 'Fórmula A.M.B',
  '/Termos_de_Uso': 'Termos de Uso',
  '/Politica_de_Privacidade': 'Política de Privacidade',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageTitle = pageTitles[router.pathname] || 'Fórmula A.M.B';
  const [showPromotion, setShowPromotion] = useState(false);
  const [visitorsCount, setVisitorsCount] = useState(100); // Valor inicial fictício

  useEffect(() => {
    const handleRouteChange = (url) => {
      setShowPromotion(false);
      window.gtag('config', 'G-KK3W3K20DY', {
        page_path: url,
      });
    };

    const handleBeforeUnload = (event) => {
      event.preventDefault();
      setShowPromotion(true);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router.events]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCount = Math.floor(Math.random() * 101) + 50;
      setVisitorsCount(newCount);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='shortcut icon' href='/fotos/Icon.jpeg' />
      </Head>
      <Component {...pageProps} />
      {showPromotion && (
        <div className='promotion-banner'>
          <p>Aproveite nossa promoção especial antes de sair!</p>
        </div>
      )}
      {typeof visitorsCount === 'number' && (
        <div className='page-visitors'>
          <p className='p'>{visitorsCount} pessoas estão na página</p>
        </div>
      )}
    </>
  );
}

export default MyApp;
