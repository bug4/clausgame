import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/music.mp3');
    audioRef.current.loop = true;
    // Set volume to 20%
    audioRef.current.volume = 0.2;

    // Try to play automatically
    const playAttempt = setInterval(() => {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          clearInterval(playAttempt);
        })
        .catch(error => {
          console.log("Waiting for user interaction:", error);
        });
    }, 2000);

    return () => {
      clearInterval(playAttempt);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback failed:", error);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute bottom-6 right-6 pointer-events-auto">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-xl transition-all text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        style={{
          backgroundColor: '#FFA500',
          '--hover-color': '#FF8C00'
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={24} />
            Music On
          </>
        ) : (
          <>
            <VolumeX size={24} />
            Music Off
          </>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;