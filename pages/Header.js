import React from 'react';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';


function Header () {
  return (
    <div>
        <div className="video-player-container">
        <VideoPlayer />
        </div>
        <Comments/>
    </div>
  );
}

export default Header