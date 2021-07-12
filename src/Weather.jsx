import "./Weather.css";
import WeatherContent from "./WeatherContent";

function Weather({ weatherInfo }) {
  return (
    <div className="Weather">
      {weatherInfo.map((day) => {
        return (
          <WeatherContent
            day={day.id}
            weekDey={day.weekDey}
            imgURL={day.imgURL}
            temp={day.temp}
          />
        );
      })}
    </div>
  );
}

export default Weather;
