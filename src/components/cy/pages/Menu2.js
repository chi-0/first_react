import { styled } from "styled-components";
import { PageTitle } from "../components/PageTitle";

const Menu2Con = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 600px;
  background: url(https://wallpapers.com/images/hd/abstract-background-6m6cjbifu3zpfv84.jpg)
    no-repeat center / cover;
  margin-bottom: 100px;
`;

export const Menu2 = () => {
  return (
    <div>
      <PageTitle title="menu2" />
      <Menu2Con></Menu2Con>
    </div>
  );
};
