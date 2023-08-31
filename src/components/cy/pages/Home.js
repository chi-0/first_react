import { styled } from "styled-components";
import { Section } from "../components/Section";
import { PageTitle } from "../components/PageTitle";

const Wrap = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
  height: 500px;
  background: url(https://t3.ftcdn.net/jpg/04/12/82/16/360_F_412821610_95RpjzPXCE2LiWGVShIUCGJSktkJQh6P.jpg)
    no-repeat center / cover;
  margin-bottom: 80px;
`;

export const Home = () => {
  return (
    <Wrap>
      <PageTitle title="Home" />
      <Main />

      <Section />
    </Wrap>
  );
};
