import React, { useEffect, useState } from 'react';
import Button from './Button';

function VideoPlayer() {
  const [areSectionsDisplayed, setAreSectionsDisplayed] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 813;
    const CLASS_TO_DISPLAY = '.esconder';

    let attempts = 0;
    let elsHiddenList = [];
    let elsDisplayed = false;
    const elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);
    const alreadyDisplayedKey = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);

    setTimeout(() => {
      elsHiddenList = Array.prototype.slice.call(elsHidden);
    }, 0);

    const showHiddenElements = () => {
      elsDisplayed = true;
      elsHiddenList.forEach((e) => (e.style.display = 'block'));
      localStorage.setItem(alreadyDisplayedKey, true);
      setAreSectionsDisplayed(true);
    };

    const startWatchVideoProgress = () => {
      if (
        typeof smartplayer === 'undefined' ||
        !(smartplayer.instances && smartplayer.instances.length)
      ) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(startWatchVideoProgress, 1000);
      }

      smartplayer.instances[0].on('timeupdate', () => {
        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY)
          return;
        showHiddenElements();
      });
    };

    if (alreadyElsDisplayed === 'true') {
      setTimeout(() => {
        showHiddenElements();
      }, 100);
    } else {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (!isMobile) {
        startWatchVideoProgress();
      }
    }

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64789f8565ce7000094b8500/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id='vid_64789f8565ce7000094b8500'
        style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
      >
        <img
          id='thumb_64789f8565ce7000094b8500'
          src='https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64789f8565ce7000094b8500/thumbnail.jpg'
          alt=''
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
          id='backdrop_64789f8565ce7000094b8500'
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            WebkitBackdropFilter: 'blur(5px)',
            backdropFilter: 'blur(5px)',
          }}
        ></div>
      </div>
      <link
        rel='preload'
        href='https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64789f8565ce7000094b8500/player.js'
        as='script'
      />
      <link
        rel='preload'
        href='https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js'
        as='script'
      />
      <link
        rel='preload'
        href='https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/64789f8565ce7000094b8500/thumbnail.jpg'
        as='image'
      />
      <link
        rel='preload'
        href='https://cdn.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/64344a1049342600085ed7d6/main.m3u8'
        as='fetch'
      />
      <link rel='dns-prefetch' href='https://cdn.converteai.net' />
      <link rel='dns-prefetch' href='https://scripts.converteai.net' />
      <link rel='dns-prefetch' href='https://images.converteai.net' />
      <link rel='dns-prefetch' href='https://api.vturb.com.br' />
    
      {areSectionsDisplayed && (
        <div>
          <Button />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
