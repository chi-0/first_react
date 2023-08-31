import { Link } from "react-router-dom";

export const HeaderEx = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/Sub01"}>SUB01</Link>
      </li>
      <li>
        <Link to={"/Sub02"}>SUB02</Link>
      </li>
      <li>
        <Link to={"/Sub03"}>SUB03</Link>
      </li>
      <li>
        <Link to={"/Sub04"}>SUB04</Link>
      </li>
    </ul>
  );
};
