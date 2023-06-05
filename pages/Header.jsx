import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import Comments from './Comments';
import Image from 'next/image';
import headline3 from './fotos/HEADCELULAR.gif';
import headline3Mobile from './fotos/HEADDESKTOP.gif';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

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
      <div className='headline-container'>
        <div className='container'>
          <Image
            src={headline3}
            layout='responsive'
            maxWidth={100}
            style={{ display: isMobile ? 'block' : 'none' }}
          />
          <Image
            src={headline3Mobile}
            layout='responsive'
            maxWidth={100}
            style={{ display: isMobile ? 'none' : 'block' }}
          />
        </div>
      </div>
      <div className='video-player-container'>
        <VideoPlayer />
      </div>
      <Comments />
    </div>
  );
}

export default Header;
