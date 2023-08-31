import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CHeader = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  padding: 0 20px;
  ul {
    display: flex;
  }
  li:last-child {
    margin-left: 40px;
  }
  h3 {
    font-size: 20px;
    font-weight: 900;
  }
`;

export const Header = () => {
  return (
    <CHeader>
      <Link to={"/"}>
        <h3>LOGO</h3>
      </Link>
      <ul>
        <li>
          <Link to={"/menu1"}>menu1</Link>
        </li>
        <li>
          <Link to={"/menu2"}>menu2</Link>
        </li>
      </ul>
    </CHeader>
  );
};
