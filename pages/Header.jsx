import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import VideoPlayer from './VideoPlayer';
import VideoPlayer02 from './VideoPlayer02';
import Comments from './Comments';
import EspComments from './EspComments.jsx';
import Image from 'next/image';
import headline3 from './fotos/celularGIF.gif';
import headline3Mobile from './fotos/pcGIF.gif';
import HeadEspCel from './fotos/HeadEspCel.gif';
import HeadeEspPC from './fotos/HeadeEspPC.gif';
import { useRouter } from 'next/router';

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='headline-container'>
        <div className='.conteiner'>
          <Image
            src={
              router.pathname != '/'
                ? isMobile
                  ? HeadEspCel
                  : HeadeEspPC
                : isMobile
                ? headline3
                : headline3Mobile
            }
            layout='responsive'
            maxWidth={100}
          />
        </div>
      </div>
      <div className='video-player-container'>
        {router.pathname === '/' ? <VideoPlayer /> : <VideoPlayer02 />}
      </div>
      <div className='comments-container'>
        {router.pathname === '/' ? <Comments /> : <EspComments />} //
      </div>
    </div>
  );
}

export default Header;
