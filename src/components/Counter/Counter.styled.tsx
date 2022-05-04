import styled from 'styled-components/macro';

export const CounterRoot = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  width: 320px;
  font-size: 200px;
  letter-spacing: -0.05em;
  text-align: center;
  padding-bottom: 39px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  color: #ccc;
  border: 1px solid #ccc;
  background-color: transparent;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
