import { styled } from "styled-components";
import { mainColors } from "../../GlobalStyled";
import { Header } from "./components/Header";
import { Title } from "./components/Title";
import { Progress } from "./components/Progress";
import { BtnWrap } from "./components/BtnWrap";

const Wrap = styled.div`
  max-width: 390px;
  width: 100%;
  height: 800px;
  margin: 0 auto;
  background-color: ${mainColors.fontColor};
  border-radius: 20px;
  color: white;
  padding: 30px;
  position: relative;
  overflow: hidden;
`;

const CoverImg = styled.div`
  width: 90%;
  height: 300px;
  background: url(${(props) => props.img}) no-repeat center / cover;
  border-radius: 20px;
  margin: 40px auto 30px auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
`;

export const MusicApp = () => {
  const bgUrl =
    "https://cdn.pixabay.com/photo/2021/06/06/21/58/background-6316451_1280.jpg";

  return (
    <>
      <Wrap>
        <Header />

        <CoverImg img={bgUrl} />

        <Title />

        <Progress />

        <BtnWrap />
      </Wrap>
    </>
  );
};
