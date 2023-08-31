import {
  faAngleDown,
  faAnglesRight,
  faBackward,
  faBars,
  faForward,
  faPause,
  faRetweet,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Wrap = styled.div`
  width: 390px;
  height: 700px;
  background-color: black;
  border-radius: 20px;
  padding: 30px;
  margin: 0 auto;
  margin-top: 100px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ArrowBtn = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreBtn = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 250px;
    height: 290px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 28px;
    font-weight: 700;
    color: white;
    margin-bottom: 20px;
  }
  p {
    font-weight: 300;
    color: white;
    margin-bottom: 20px;
  }
`;

const PlayBar = styled.div`
  width: 100%;
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: lightgray;
  border-radius: 2px;
  margin-bottom: 5px;
`;

const InnerBar = styled.div`
  height: 100%;
  width: 7%;
  background-color: hotpink;
  border-radius: 2px;
`;

const PlayTime = styled.div`
  display: flex;
  position: relative;
  p {
    font-size: 12px;
  }
  p:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const MainBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const PlayBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: hotpink;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.div`
  width: 100%;
  padding: 7px 10px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  align-items: center;
  position: relative;
  p {
    font-size: 13px;
    font-weight: 300;
    margin-left: 10px;
  }
`;

const FooterImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(https://thumb.photo-ac.com/56/5691dfc95aa4b49d7b928e489016b12b_t.jpeg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const IconEx00 = () => {
  return (
    <div>
      <Wrap>
        <Header>
          <ArrowBtn>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{
                fontSize: "20px",
              }}
            />
          </ArrowBtn>
          <MoreBtn>
            <FontAwesomeIcon
              icon={faBars}
              style={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </MoreBtn>
        </Header>

        <Main>
          <img src="https://image.bugsm.co.kr/album/images/500/203001/20300127.jpg"></img>
          <h3>아무노래</h3>
          <p>지코 (ZICO)</p>
          <PlayBar>
            <Bar>
              <InnerBar />
            </Bar>
            <PlayTime>
              <p>00:30</p>
              <p>03:47</p>
            </PlayTime>
            <MainBtn>
              <FontAwesomeIcon
                icon={faShuffle}
                style={{
                  color: "white",
                }}
              />
              <FontAwesomeIcon
                icon={faBackward}
                style={{
                  color: "white",
                }}
              />
              <PlayBtn>
                <FontAwesomeIcon icon={faPause} />
              </PlayBtn>
              <FontAwesomeIcon
                icon={faForward}
                style={{
                  color: "white",
                }}
              />
              <FontAwesomeIcon
                icon={faRetweet}
                style={{
                  color: "white",
                }}
              />
            </MainBtn>
          </PlayBar>
        </Main>

        <Footer>
          <FooterImg>
            <div></div>
          </FooterImg>
          <p>hellow</p>
          <FontAwesomeIcon
            icon={faAnglesRight}
            style={{
              position: "absolute",
              top: "50%",
              right: "20px",
              transform: "translateY(-50%)",
            }}
          />
        </Footer>
      </Wrap>
    </div>
  );
};
