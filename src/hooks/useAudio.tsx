import { useCallback, useEffect, useState } from 'react';

export const useAudio = (url: string): [boolean, () => void, () => void, () => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const play = useCallback(() => {
    audio.currentTime = 0;
    setPlaying(true);
  }, [audio]);

  const stop = useCallback(() => {
    audio.currentTime = 0;
    setPlaying(false);
  }, [audio]);

  const toggle = useCallback(() => {
    playing ? stop() : play();
  }, [playing, play, stop]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle, play, stop];
};
