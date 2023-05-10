import React, { useEffect, useState } from 'react';
import Button from './Button';

function VideoPlayer() {
  const [areSectionsDisplayed, setAreSectionsDisplayed] = useState(false);

  useEffect(() => {
    const SECONDS_TO_DISPLAY = 241;
    const CLASS_TO_DISPLAY = ".esconder";

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
      elsHiddenList.forEach((e) => (e.style.display = "block"));
      localStorage.setItem(alreadyDisplayedKey, true);
      setAreSectionsDisplayed(true);
    };

    const startWatchVideoProgress = () => {
      if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(startWatchVideoProgress, 1000);
      }

      smartplayer.instances[0].on('timeupdate', () => {
        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
        showHiddenElements();
      });
    };

    if (alreadyElsDisplayed === 'true') {
      setTimeout(() => {
        showHiddenElements();
      }, 100);
    } else {
      startWatchVideoProgress();
    }
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/645ab8f1ad718e000969cfa9/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Remover o script quando o componente for desmontado
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="vid_645ab8f1ad718e000969cfa9" style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}>
        <img
          id="thumb_645ab8f1ad718e000969cfa9"
          src="https://images.converteai.net/1db8e03a-c1fc-4fa6-b094-4a5346a615e6/players/645ab8f1ad718e000969cfa9/thumbnail.jpg"
          alt=""
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      <div
          id="backdrop_645ab8f1ad718e000969cfa9"
          style={{ position: 'absolute', top: 0, width: '100%', height: '100%', WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)' }}
        ></div>
      </div>
      
      {areSectionsDisplayed && (
        <div>
          <Button />
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;

