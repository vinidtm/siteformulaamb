import React from 'react';
import Footer from './Footer';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import Image from 'next/image';
import cientista_r_v from './fotos/cientista_r_v.gif'


function Amb() {
  return (
    <div className='fundo-verde'>
      <div className='headline-container'>
          <div className='.conteiner'>
          <Image src={cientista_r_v} layout="responsive" maxWidth={100} />
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
