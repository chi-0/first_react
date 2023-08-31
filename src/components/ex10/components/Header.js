import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
`;

const MoreBtn = styled.div`
  color: ${mainColors.fontColor};
  background-color: white;
`;

const MenuBtn = styled.div`
  border: 1px solid #f1f1f1;
`;

const MenuSlide = styled.nav`
  position: absolute;
  top: ${(props) => props.$isActive};
  left: 0;
  width: 390px;
  height: 800px;
  background-color: ${mainColors.fontColor};
  border-radius: 20px;
  padding: 30px;
  transition: 0.5s;
`;

const MusicList = styled.ul`
  width: 100%;
  margin-bottom: 20px;
  display: flex;

  > li {
    width: 60px;
    height: 60px;
    background-color: gray;
  }
`;

const MusicTitle = styled.ul`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  li:first-child {
    margin-bottom: 5px;
  }
`;

const Xbtn = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  li {
    width: 50px;
    height: 50px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Header = () => {
  const [active, setActive] = useState("100%");

  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faCaretDown} />
      </MoreBtn>

      <MenuBtn onClick={() => setActive(0)}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>

      <MenuSlide $isActive={active}>
        <Xbtn>
          <li onClick={() => setActive("100%")}>X</li>
        </Xbtn>
        <MusicList>
          <li></li>
          <MusicTitle>
            <li>노래제목</li>
            <li>가수</li>
          </MusicTitle>
        </MusicList>
      </MenuSlide>
    </SHeader>
  );
};

// *메뉴 이벤트 작업
// 1.메뉴 버튼을 클릭하면 숨김메뉴가 top 100%에서 0%로 변경이됨
// 2.닫기 버튼을 클릭하면 숨김메뉴가 top 0에서 100%로 변경이됨
