import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/global.css'; // Importe o arquivo de estilo global
import { Analytics } from '@vercel/analytics/react';

const pageTitles = {
  '/': 'Fórmula A.M.B',
  '/Termos_de_Uso': 'Termos de Uso',
  '/Politica_de_Privacidade': 'Política de Privacidade',
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageTitle = pageTitles[router.pathname] || 'Fórmula A.M.B'; // Define o título padrão

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
      <Analytics/>
    </>
  );
}

export default MyApp;
