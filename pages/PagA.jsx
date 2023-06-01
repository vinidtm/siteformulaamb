import React from 'react';
import Footer from './Footer';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import Image from 'next/image';
import h1fv from './fotos/h1fv.gif'


function Amb() {
  return (
    <div className='fundo-verde'>
      <div className='headline-container'>
          <div className='.conteiner'>
          <Image src={h1fv} layout="responsive" maxWidth={100} />
        </div>
        </div>
        <div className="video-player-container">
        <VideoPlayer />
        </div>
        <Comments/>
      <Footer />
    </div>
  );
}

export default Amb;
