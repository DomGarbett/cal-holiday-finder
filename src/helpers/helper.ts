import { rotaWeeks } from "../data";
import { Day } from "./Day";
import { RotaWeek, RotaWeekType } from "./interfaces";

const reorder = (data: RotaWeek[], index: number) => {
  return data.slice(index).concat(data.slice(0, index));
};

export const getRotaForDate = (startDate: Date, startWeek: RotaWeekType) => {
  const x = startDate.getUTCDay();

  let dayArray: Day[] = [];

  const indexOfLetter = rotaWeeks.findIndex((x) => x.Name === startWeek);
  const orderedByStart = reorder(rotaWeeks, indexOfLetter);

  orderedByStart.forEach((week, index) => {
    dayArray = dayArray.concat(week.DaysOfWeek);
  });

  return dayArray;
};

export const getDayOfWeek = (i: number) => {
  switch (i) {
    case 0:
      return "Monday";
    case 1:
      return "Tuesday";
    case 2:
      return "Wednesday";
    case 3:
      return "Thursday";
    case 4:
      return "Friday";
    case 5:
      return "Saturday";
    case 6:
      return "Sunday";
    default:
      return "Day Not Found";
  }
};

