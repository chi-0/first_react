import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { user } from "../userData";
import { useNavigate } from "react-router-dom";
import { Form, Input, Title, Wrap } from "../components/Styled";

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  text-align: center;
  color: white;
  margin-top: 20px;
  font-weight: 600;
  box-sizing: border-box;
  background-color: coral;
  cursor: pointer;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
`;

export const Signup = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;

    if (username !== user.username) {
      setError("username", {
        message: "아이디가 틀렸습니다",
      });
    }

    if (password !== user.password) {
      setError("password", {
        message: "비밀번호가 틀렸습니다",
      });
    }

    nav("/login");
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>LOGIN</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수 입니다",
          })}
          placeholder="아이디"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input
          {...register("name", {
            required: "이름은 필수 입니다",
          })}
          placeholder="이름"
        />
        <ErrorMessage text={errors?.name?.message} />
        <Input
          {...register("email", {
            required: false,
          })}
          placeholder="이메일"
        />
        <Input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해 주세요.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />
        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};
