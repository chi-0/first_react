import { Link } from "react-router-dom";
import { styled } from "styled-components";

const CSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 80px;
`;

const Con = styled.div`
  width: 300px;
  height: 450px;
  background: url(${(props) => props.$bgCon}) no-repeat center / cover;
`;

export const Section = () => {
  return (
    <CSection>
      <Link to={"/menu1"}>
        <Con
          $bgCon={
            "https://e1.pxfuel.com/desktop-wallpaper/339/334/desktop-wallpaper-green-studio-backgrounds-full-8%C3%9712-full-background.jpg"
          }
        ></Con>
      </Link>
      <Link to={"/menu2"}>
        <Con
          $bgCon={
            "https://i.pinimg.com/736x/6a/aa/ab/6aaaab354709ef2fa16fbd72299c8f55.jpg"
          }
        ></Con>
      </Link>
    </CSection>
  );
};
