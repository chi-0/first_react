import { Food } from "./Food"


const weekFood = [
  {
    day: "월",
    breakfast: "치즈피자",
    lunch: "패퍼로니피자",
    dinner: "콤비네이션피자"
  },
  
  {
    day: "화",
    breakfast: "교촌치킨",
    lunch: "굽네치킨",
    dinner: "BBQ치킨"
  },

  {
    day: "수",
    breakfast: "엽기떡볶이",
    lunch: "신전떡볶이",
    dinner: "응급실떡볶이"
  }
]

export const FoodList = () => {
  return (
    <div>
      <Food wDay={weekFood[0].day} wBreakfast={weekFood[0].breakfast} wLunch={weekFood[0].lunch} wDinner={weekFood[0].dinner}/>
      <Food wDay={weekFood[1].day} wBreakfast={weekFood[1].breakfast} wLunch={weekFood[1].lunch} wDinner={weekFood[1].dinner}/>
      <Food wDay={weekFood[2].day} wBreakfast={weekFood[2].breakfast} wLunch={weekFood[2].lunch} wDinner={weekFood[2].dinner}/>
    </div>
    )
}