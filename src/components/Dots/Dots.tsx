import * as Styled from './Dots.styled';

type DotsProps = {
  playing: boolean;
  active: number;
  count: number;
}

export const Dots = function({ playing, active, count }: DotsProps) {
  const dots = Array(count).fill(undefined);

  return <Styled.DotsRoot>
    {dots.map((_, index) => <Styled.Dot isActive={index === active} isPlaying={playing} key={index} isAccent={index === 0} />)}
  </Styled.DotsRoot>
}