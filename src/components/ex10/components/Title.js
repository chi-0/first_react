import { styled } from "styled-components";

const STitle = styled.div`
  text-align: center;
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p {
    color: #dbdbdb;
    font-weight: 300;
  }
`;

export const Title = () => {
  return (
    <STitle>
      <h3>blue bird</h3>
      <p>홍길동</p>
    </STitle>
  );
};
