import styled from "styled-components/macro";

type DotProps = {
  isAccent?: boolean;
  isPlaying: boolean;
  isActive: boolean;
}

export const DotsRoot = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Dot = styled.div<DotProps>`
  width: 35px;
  height: 35px;
  background-color: ${p => p.isAccent ? 'red' : 'yellow'};
  opacity: ${p => !p.isPlaying || p.isActive ? 1 : 0.4};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
