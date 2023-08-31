import { faBars, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <div>
      <h3>메뉴 버튼</h3>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          color: "blue",
          fontSize: "30px",
        }}
      />
      <br />
      <br />
      <FontAwesomeIcon
        icon={faUserGraduate}
        style={{
          color: "green",
          fontSize: "40px",
        }}
      />
    </div>
  );
};
