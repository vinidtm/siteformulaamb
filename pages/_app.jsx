import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/global.css';

const pageTitles = {
  '/Page01': 'Fórmula A.M.B',
  '/Termos_de_Uso': 'Termos de Uso',
  '/Politica_de_Privacidade': 'Política de Privacidade',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageTitle = pageTitles[router.pathname] || 'Fórmula A.M.B';
  const [showPromotion, setShowPromotion] = useState(false);
  const [visitorsCount, setVisitorsCount] = useState(702);
  const [isHomePage, setIsHomePage] = useState(true);

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
      const currentCount = visitorsCount;

      const increaseProbability = Math.random();

      let randomChange;

      if (increaseProbability < 0.5) {
        randomChange = Math.floor(Math.random() * (10 - 20 + 1)) + 30;
      } else {
        randomChange = Math.floor(Math.random() * 6) - 5;
      }

      const newCount = Math.max(currentCount + randomChange, 0);

      setVisitorsCount(newCount);
    }, 10000);

    return () => clearInterval(interval);
  }, [visitorsCount]);

 

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />

      {isHomePage && typeof visitorsCount === 'number' && (
        <div className='page-visitors'>
          <div className='p'>
            <div className='visitors'>{visitorsCount}</div>
            {router.pathname === '/'
              ? 'pessoas estão assistindo a esse vídeo.'
              : ' la gente está viendo este video.'}
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
