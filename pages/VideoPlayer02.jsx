import React, { useEffect } from 'react';

function VideoPlayer02() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6494507d898cc800097a6cee/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id='vid_6494507d898cc800097a6cee'
        style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
      >
        <img
          id='thumb_6494507d898cc800097a6cee'
          src='https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6494507d898cc800097a6cee/thumbnail.jpg'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          id='backdrop_6494507d898cc800097a6cee'
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
          }}
        />
      </div>
      <link
        rel='preload'
        href='https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6494507d898cc800097a6cee/player.js'
        as='script'
      />
      <link
        rel='preload'
        href='https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js'
        as='script'
      />
      <link
        rel='preload'
        href='https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/6494507d898cc800097a6cee/thumbnail.jpg'
        as='image'
      />
      <link
        rel='preload'
        href='https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/6494506e2e6fd10009820df1/main.m3u8'
        as='fetch'
      />
      <link rel='dns-prefetch' href='https://cdn.converteai.net' />
      <link rel='dns-prefetch' href='https://scripts.converteai.net' />
      <link rel='dns-prefetch' href='https://images.converteai.net' />
      <link rel='dns-prefetch' href='https://api.vturb.com.br' />
    </div>
  );
}

export default VideoPlayer02;
