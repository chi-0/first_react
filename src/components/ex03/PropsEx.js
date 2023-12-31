import Intro from "./Intro";

export const PropsEx = () => {
  return (
    <div>
      <div>
        <Intro name="홍길동" age="12" />
        <hr />
        <Intro name="고길동" age="11" />
        <hr />
        <Intro name="김길동" age="13" />
        <hr />
      </div>
    </div>
  );
};

// export const PropsEx02 = () => {
//     return <div>두번째 컴포넌트</div>;
// };

// export const PropsEx03 = () => {
//     return <div>세번째 컴포넌트</div>;
// };

// export default PropsEx;
// export default PropsEx02;
// =>export는 컴포넌트 내부에 단 하나만 존재해야됨

// *props
// =>함수 매개 변수 역할
// =>프롭스는 오브젝트로 반환함
