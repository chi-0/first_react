import { styled } from "styled-components";

const SProgress = styled.div`
  margin: 30px 0;
`;

const BarWrap = styled.div`
  height: 5px;
  background-color: gray;
  border-radius: 2px;
`;

const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: coral;
  border-radius: 2px;
`;

const PlayTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-top: 5px;
  color: #dbdbdb;
`;

const Time = styled.div``;

export const Progress = () => {
  return (
    <SProgress>
      <BarWrap>
        <Bar />
      </BarWrap>

      <PlayTime>
        <Time>00:03</Time>
        <Time>03:47</Time>
      </PlayTime>
    </SProgress>
  );
};
