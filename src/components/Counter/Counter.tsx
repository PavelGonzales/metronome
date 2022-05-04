import { useCallback, useState } from 'react';
import * as Styled from './Counter.styled';

export const Counter = function() {
  const [bpm, setBpm] = useState(60);

  const decrement = useCallback((value: number) => {
    setBpm(bpm - value);
  }, [bpm]);

  const increment = useCallback((value: number) => {
    setBpm(bpm + value);
  }, [bpm]);

  return <Styled.CounterRoot>
    <Styled.Buttons>
      <Styled.Button onClick={() => decrement(1)}>
        - 1
      </Styled.Button>
      <Styled.Button onClick={() => decrement(5)}>
        - 5
      </Styled.Button>
    </Styled.Buttons>
    <Styled.Value>
      {bpm}
    </Styled.Value>
    <Styled.Buttons>
      <Styled.Button onClick={() => increment(1)}>
        + 1
      </Styled.Button>
      <Styled.Button onClick={() => increment(5)}>
        + 5
      </Styled.Button>
    </Styled.Buttons>
  </Styled.CounterRoot>;
}
