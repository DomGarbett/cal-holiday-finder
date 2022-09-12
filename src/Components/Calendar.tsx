import { getDayOfWeek, getRotaForDate } from "../helpers/helper";
import DatePicker, { DatePickerProps } from "react-date-picker";
import { useEffect, useState } from "react";
import { Day } from "../helpers/Day";
import { RotaWeekType } from "../helpers/interfaces";
import DatesToAvoid from "./DatesToAvoid";
import StartWeekSelector from "./StartWeekSelector";

function Calandar() {
  const [startDate, setStartDate] = useState(new Date(2023, 4, 3));
  const [startWeek, setStartWeek] = useState<RotaWeekType>("A");
  const [selectedDate, setSelectedDate] = useState<number>();

  const [datesToAvoid, setDatesToAvoid] = useState<Date[]>([]);

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

  const selectDate = (dateA: number) => {
    console.log("selectDate", dateA);

    if (selectedDate === dateA) {
      setSelectedDate(-1);
    } else {
      setSelectedDate(dateA);
    }
  };

  return (
    <>
      <nav className="navbar navbar-nav navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Rota Cal
          </a>
        </div>
      </nav>

      <div className="container text-center">
        <div className="row">
          <div className="col-2">
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <div className="start-date">Select Start Date</div>
                  <DatePicker
                    value={startDate}
                    onChange={onChange}></DatePicker>
                </div>
                <StartWeekSelector
                  value={startWeek}
                  handleChange={handleChange}></StartWeekSelector>
                <DatesToAvoid datesToDisplay={datesToAvoid}></DatesToAvoid>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => {}}>
                  Add date to avoid
                </button>
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="container">
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

                  const isDateSelected = index === selectedDate;

                  return (
                    <div
                      onClick={() => selectDate(index)}
                      style={{
                        backgroundColor: isDateSelected
                          ? "#f93"
                          : day.getColour(),
                      }}
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
      </div>
    </>
  );
}

export default Calandar;
