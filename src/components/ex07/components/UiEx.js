import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { Header } from "./Header";
import { Section } from "./Section";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background-color: #f1f1f1;
`;

const Banner = styled.section`
  width: 100%;
  height: 300px;
  background-color: beige;
`;

export const UiEx = () => {
  return (
    <Wrap>
      <Header />

      <Banner></Banner>

      <Section />
    </Wrap>
  );
};
