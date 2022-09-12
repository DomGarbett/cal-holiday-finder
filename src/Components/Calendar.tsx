import { getDayOfWeek, getRotaForDate } from "../helpers/helper";
import DatePicker, { DatePickerProps } from "react-date-picker";
import { useEffect, useState } from "react";
import { Day } from "../helpers/Day";
import { RotaWeekType } from "../helpers/interfaces";

function Calandar() {
  const [startDate, setStartDate] = useState(new Date(2023, 8, 3));
  const [startWeek, setStartWeek] = useState<RotaWeekType>("A");

  const [rota, setRota] = useState<Day[]>();
  const onChange = (input: Date) => {
    setStartDate(input);
  };

  const handleChange = (event: any) => {
    setStartWeek(event.target.value);
  };

  useEffect(() => {
    const rotaToSet = getRotaForDate(startDate, startWeek);
    setRota(rotaToSet);
  }, [startDate, startWeek, setRota]);

  return (
    <div className="container">
      <div className="Dom">
        <ul>
          <div className="start-date">Select Start Date</div>
          <DatePicker value={startDate} onChange={onChange}></DatePicker>
          <div className="start-week">Select Start Week</div>
          <select value={startWeek} onChange={handleChange}>
            <option value="A">A </option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
            <option value="J">J</option>
            <option value="K">K</option>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="N">N</option>
            <option value="O">O</option>
            <option value="P">P</option>
            <option value="Q">Q</option>
            <option value="R">R</option>
          </select>
        </ul>
        <div className="calendar">
          <div className="month-indicator"> </div>
          <div className="day-of-week">
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
            <div>Sunday</div>
          </div>
          <div className="date-grid">
            {rota?.map((day, index) => {
              const date = new Date(startDate);
              date.setDate(startDate.getDate() + index);

              return (
                <div
                  style={{ backgroundColor: day.getColour() }}
                  className="day-item">
                  <div className="date-title">{date.toDateString()}</div>
                  <div className="date-working-pattern">{`${day.getWorkingString()}`}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calandar;
