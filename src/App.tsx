import { Counter } from './components/Counter/Counter';
import { PlayButton } from './components/PlayButton/PlayButton';
import { Dots } from './components/Dots/Dots';
import singleHit from './assets/sounds/single-hit.mp3';
import * as Styled from './App.styled';
import { useAudio } from './hooks/useAudio';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [playing, setPlaying] = useState(false);
  const [_, toggle, play, stop] = useAudio(singleHit);
  const inrevalIds = useRef<{[key: string]: NodeJS.Timer}>({});
  const [activeDot, setActiveDot] = useState(0);

  const togglePlaying = useCallback(() => {
    if (!playing) {
      setPlaying(true);
      play();
      inrevalIds.current.id = setInterval(() => {
        console.log(activeDot)
        console.log(activeDot < 4)

        setActiveDot(() => activeDot + 1);
        play();
      }, 1000);
    } else {
      setPlaying(false);
      clearInterval(inrevalIds.current.id);
    }
  }, [playing, play, activeDot]);

  console.log({
    playing,
    activeDot
  })

  return (
    <Styled.App>
      <Dots count={4} playing={playing} active={activeDot} />
      <Counter />
      <PlayButton playing={playing} onClick={togglePlaying} />
    </Styled.App>
  );
}

export default App;
