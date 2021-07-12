import './Weather.css';

function Weather({ weatherInfo }) {
  return (
    <div className="Weather">
      {weatherInfo.map((day) => {
        return (
          <div key={day.id} className="container">
            <h3>{day.weekDey}</h3>
            <img src={day.imgURL} alt={"logo"} />
            <h3>{day.temp}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Weather;
