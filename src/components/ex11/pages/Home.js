import { Helmet } from "react-helmet";
import { PageTitle } from "../components/PageTitle";

export const Home = () => {
  return (
    <div>
      <PageTitle title={"홈"} />
      <h3>HOME Page</h3>
    </div>
  );
};

// *Link
// =>리액트에선 a태그 대신 react-router-dom에 포함되어있는
// Link컴포넌트를 이용함
// =>to={경로} 속성을 사용하여 경로 지정
