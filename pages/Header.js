import React from 'react';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import headline1 from './fotos/head1.gif'


function Header () {
  return (
    <div>
        <Image src={headline1} width={900}/>
        <div className="video-player-container">
        <VideoPlayer />
        </div>
        <Comments/>
    </div>
  );
}

export default Header