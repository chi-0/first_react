import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const SSection = styled.section`
  width: 100%;
  height: 400px;
  padding: 20px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 23px;
  font-weight: 700;
  color: ${mainColors.fontColor};
`;

const ConWrap = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  width: 45%;
  height: 80%;
  /* background: url(${(props) => props.bgImg}) no-repeat center / cover; */
  background-color: lightblue;
  padding: 10px;
  &:hover {
    background-color: ${mainColors.pointColor};
  }
  /* =>자기 자신을 선택할땐 &를 사용함 */
`;

export const Section = () => {
  return (
    <SSection>
      <Title>타이틀</Title>

      <ConWrap>
        <Con bgImg="https://images.unsplash.com/photo-1602498456745-e9503b30470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80">
          <p>타이틀01</p>
        </Con>
        <Con bgImg="https://png.pngtree.com/thumb_back/fh260/background/20221228/pngtree-beautiful-romantic-fresh-illustration-mobile-phone-wallpaper-background-image_1500796.jpg">
          <p>타이틀02</p>
        </Con>
      </ConWrap>
    </SSection>
  );
};
