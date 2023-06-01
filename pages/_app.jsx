import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Cookies from 'cookies';
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
  const [visitorsCount, setVisitorsCount] = useState(100);

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
  /*Quando for o teste A/B so tirar do comentario e alterar os nomes caso necessarios 'AmbA' : 'AmbB'; e adicionar o codigo a seguir no vercel.json "{ "source": "/AmbA", "destination": "/AmbA" },
    { "source": "/AmbB", "destination": "/AmbB" }" que sao as rotas para os testes */
  // // A/B testing
  // useEffect(() => {
  //   let experiment;

  //   if (document.cookie.split('; ').find((row) => row.startsWith('abTest'))) {
  //     experiment = document.cookie
  //       .split('; ')
  //       .find((row) => row.startsWith('abTest'))
  //       .split('=')[1];
  //   } else {
  //     experiment = Math.random() < 0.5 ? 'AmbA' : 'AmbB';
  //     document.cookie = `abTest=${experiment}; max-age=900000; path=/`;
  //   }

  //   if (router.pathname === '/') {
  //     router.push(`/${experiment}`);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel='shortcut icon' href='/fotos/Icon.jpeg' />
      </Head>
      <Component {...pageProps} />

      {typeof visitorsCount === 'number' && (
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
