import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MF42VBT');`,
            }}
          />
          {/* End Google Tag Manager */}

    <link rel="preload" href="https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/645ab8f1ad718e000969cfa9/player.js" as="script" />
    <link rel="preload" href="https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js" as="script" />
    <link rel="preload" href="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/645ab8f1ad718e000969cfa9/thumbnail.jpg" as="image" />
    <link rel="preload" href="https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/644d35d98857f7000ae57159/playlist.m3u8" as="fetch" />
    <link rel="dns-prefetch" href="https://cdn.converteai.net" />
    <link rel="dns-prefetch" href="https://scripts.converteai.net" />
    <link rel="dns-prefetch" href="https://images.converteai.net" />
    <link rel="dns-prefetch" href="https://api.vturb.com.br" />
    
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MF42VBT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />        
        </body>
      </Html>
    );
  }
}

export default MyDocument;
