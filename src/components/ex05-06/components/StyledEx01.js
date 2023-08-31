import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${props => props.bgColor};
  margin-bottom: 30px;
`;

const Box2 = styled.div`
  display: ${props => props.boxDisplay};
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: ${props => props.boxWidth};
  height: ${props => props.boxWidth};
  border: 3px solid ${props => props.borderColor};
  background-color: ${props => props.bgColor};
`

export const StyledEx01 = () => {
  return (
    <div>
      <Box bgColor="darkmagenta"></Box>
      <Box bgColor="grey"></Box>
      <Box2 boxWidth="300px" borderColor="skyblue" boxDisplay="flex">
        <Box2 boxWidth="100px" borderColor="lightblue" boxDisplay="block" bgColor="lightcyan"></Box2>
      </Box2>
      
    </div>
  );
};
