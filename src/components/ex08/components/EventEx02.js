import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$boxColor};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("lightgray");
  const [num, setNum] = useState(0);

  const bgHandler = () => {
    if (num === 0) {
      setBgColor("teal");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("lightgray");
      setNum(num - 1);
    }
    // setBgColor("teal");
    // if (bgColor === "teal") {
    //   setBgColor("lightgray");
    // }
  };

  return (
    <div>
      <Box onClick={bgHandler} $boxColor={bgColor}></Box>
    </div>
  );
};
