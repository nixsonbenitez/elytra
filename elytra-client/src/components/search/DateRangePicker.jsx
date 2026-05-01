import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateRangePicker.css"


function DateRangePicker({dates, setDates}){
    return (
       <div className="date-range-picker">
      <img src="/calendar.png" alt="calendar" className="date-icon" />
      <div className="date-fields">
        <DatePicker
          selected={dates.departure ? new Date(dates.departure) : null}
          onChange={(date) => setDates({ ...dates, departure: date })}
          placeholderText="Departure"
          className="date-field"
        />
        <span className="date-separator"></span>
        <DatePicker
          selected={dates.return ? new Date(dates.return) : null}
          onChange={(date) => setDates({ ...dates, return: date })}
          placeholderText="Return"
          className="date-field"
        />
      </div>
    </div>
    )
}

export default DateRangePicker;