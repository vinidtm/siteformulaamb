import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/global.css';

const pageTitles = {
  '/Page01': 'Fórmula A.M.B',
  '/Termos_de_Uso': 'Termos de Uso',
  '/Politica_de_Privacidade': 'Política de Privacidade',
  '/Page02': 'Página 2',
  '/Page03': 'Página 3',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageTitle = pageTitles[router.pathname] || 'Fórmula A.M.B';
  const [showPromotion, setShowPromotion] = useState(false);
  const [visitorsCount, setVisitorsCount] = useState(100);
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
      const newCount = Math.floor(Math.random() * 101) + 50;
      setVisitorsCount(newCount);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsHomePage(router.pathname === '/');
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />

      {isHomePage && typeof visitorsCount === 'number' && (
        <div className='page-visitors'>
          <div className='p'>
            <div className='visitors'>{visitorsCount}</div> pessoas estão
            assistindo a esse vídeo.
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
