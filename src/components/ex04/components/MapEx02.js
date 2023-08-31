const intro = [
  {
    id: 0,
    name: "홍길동",
    age: 12,
  },
  {
    id: 1,
    name: "고길동",
    age: 22,
  },
  {
    id: 2,
    name: "김길동",
    age: 32,
  },
];

export const MapEx02 = () => {
  return (
    <div>
      {intro.map((me) => (
        <div key={me.id}>
          <h3>소개</h3>
          <h4>이름: {me.name}</h4>
          <h4>나이: {me.age}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};
