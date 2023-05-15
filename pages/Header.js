import React from 'react';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import Image from 'next/image';
import headline2 from './fotos/head2.gif'


function Header () {
  return (
    <div>
        <div className='headline-container'>
          <div className='.conteiner'>
          <Image src={headline2} layout="responsive" maxWidth={100} />
        </div>
        </div>
        <div className="video-player-container">
        <VideoPlayer />
        </div>
        <Comments/>
    </div>
  );
}

export default Header