import React from 'react';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import headline1 from './fotos/headline1'


function Header () {
  return (
    <div>
        <div className="video-player-container">
        <Image src={headline1} width={900}/>
        <VideoPlayer />
        </div>
        <Comments/>
    </div>
  );
}

export default Header