import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  font-size: 18px;
  li:nth-child(3) {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: coral;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>
      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPause} />
      </li>
      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </SBtnWrap>
  );
};
