export const Food = ({ wDay, wBreakfast, wLunch, wDinner }) => {
 
  return (
    <div>
      <h2>{wDay} 요일</h2>
      <ul>
        <li>아침: {wBreakfast}</li>
        <li>점심: {wLunch}</li>
        <li>저녁: {wDinner}</li>
      </ul>
    </div>
  )

}