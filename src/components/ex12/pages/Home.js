import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Banner = styled.section`
  height: 800px;
  background: url(https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg)
    no-repeat center / cover;
`;

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
  a {
    width: 45%;
    height: 500px;
  }
`;

const Con = styled.div`
  height: inherit;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        <Link to={"/sub/0"}>
          <Con $bgUrl="https://learn.canva.com/wp-content/uploads/2020/02/removing-background-images_Unsplash.jpeg"></Con>
        </Link>
        <Link to={"/sub/1"}>
          <Con $bgUrl="https://www.creativefabrica.com/wp-content/uploads/2023/05/08/Background-Graphics-69189184-1.png"></Con>
        </Link>
        <Link to={"/sub/2"}>
          <Con $bgUrl="https://st5.depositphotos.com/35914836/63547/i/450/depositphotos_635479512-stock-photo-brown-wooden-wall-texture-background.jpg"></Con>
        </Link>
      </Section>
    </div>
  );
};
