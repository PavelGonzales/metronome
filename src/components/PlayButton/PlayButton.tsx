import * as Styled from './PlayButton.styled';

type PlayButtonProps = {
  playing: boolean;
  onClick: () => void;
};

export const PlayButton = function({ playing, onClick }: PlayButtonProps) {
  return <Styled.PlayButtonRoot onClick={onClick}>
    {playing ? 'STOP' : 'PLAY'}
    <Styled.Description>
      Click or press <Styled.Code>space</Styled.Code>
    </Styled.Description>
  </Styled.PlayButtonRoot>
}
