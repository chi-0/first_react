import { useState } from "react";
import { styled } from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  ul {
    display: flex;
    justify-content: center;
  }
  ul li {
    margin-right: 20px;
  }
`;

const Logo = styled.div``;

const Bar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  div {
    width: 70%;
    height: 2px;
    background-color: black;
    margin-bottom: 4px;
  }
`;

const Box = styled.div`
  position: fixed;
  top: 90px;
  right: 20px;
  width: 300px;
  height: 600px;
  background-color: green;
  opacity: ${(props) => props.$boxAct};
  transition: 0.5s;
`;

export const EventEx = () => {
  const [act, setAct] = useState(0);

  const barHandler = () => {
    setAct(100);
    if (act === 100) {
      setAct(0);
    }
  };

  return (
    <div>
      <Header>
        <Logo>Logo</Logo>
        <ul>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
        </ul>
        <Bar onClick={barHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Bar>
      </Header>
      <Box $boxAct={act}></Box>
    </div>
  );
};
