import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/global.css'; // Importe o arquivo de estilo global

const pageTitles = {
  '/': 'Fórmula A.M.B',
  '/Termos_de_Uso': 'Termos de Uso',
  '/Politica_de_Privacidade': 'Política de Privacidade',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageTitle = pageTitles[router.pathname] || 'Fórmula A.M.B'; // Define o título padrão

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-KK3W3K20DY', {
        page_path: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
