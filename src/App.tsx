import { Counter } from './components/Counter/Counter';
import { PlayButton } from './components/PlayButton/PlayButton';
import * as Styled from './App.styled';

function App() {
  return (
    <Styled.App>
      <Counter />
      <PlayButton />
    </Styled.App>
  );
}

export default App;
