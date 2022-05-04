import * as Styled from './PlayButton.styled';

export const PlayButton = function() {
  return <Styled.PlayButtonRoot>
    PLAY
    <Styled.Description>
      Click or press <Styled.Code>space</Styled.Code>
    </Styled.Description>
  </Styled.PlayButtonRoot>
}
