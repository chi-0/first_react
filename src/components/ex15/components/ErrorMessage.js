import { styled } from "styled-components";

const ErrorM = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: salmon;
  margin-top: 5px;
  text-align: center;
`;

export const ErrorMessage = ({ text }) => {
  return <ErrorM>{text}</ErrorM>;
};
