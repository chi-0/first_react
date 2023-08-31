import { styled } from "styled-components";
import { PageTitle } from "../components/PageTitle";

const Menu1Con = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 600px;
  background: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0)
    no-repeat center / cover;
  margin-bottom: 100px;
`;

export const Menu1 = () => {
  return (
    <div>
      <PageTitle title="menu1" />
      <Menu1Con></Menu1Con>
    </div>
  );
};
