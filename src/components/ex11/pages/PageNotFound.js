import { Link } from "react-router-dom";
import { PageTitle } from "../components/PageTitle";

export const PageNotFound = () => {
  return (
    <div>
      <PageTitle title="404 Notfound" />
      <h2>페이지를 찾을수 없어요...🎈</h2>
      <Link to={"/"}>HOME</Link>
    </div>
  );
};
