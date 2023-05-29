import React from 'react';
import Footer from './Footer';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import Image from 'next/image';
import h1fb from './fotos/h1fb.gif';

function AmbB() {
  return (
    <div className='fundo-azul'>
      <div className='headline-container'>
        <div className='.conteiner'>
          <Image src={h1fb} layout='responsive' maxWidth={100} />
        </div>
      </div>
      <div className='video-player-container'>
        <VideoPlayer />
      </div>
      <Comments />
      <Footer />
    </div>
  );
}

export default AmbB;
