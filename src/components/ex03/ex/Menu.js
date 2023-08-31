export const Menu = ({ breakfast, lunch, dinner }) => {
  return (
    <div>
      <ul>
        <li>아침 메뉴: {breakfast}</li>
        <li>점심 메뉴: {lunch}</li>
        <li>저녁 메뉴: {dinner}</li>
      </ul>
    </div>
  );
};
