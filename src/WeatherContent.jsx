import "./WeatherContent.css";

function WeatherContent({ weekDey, imgURL, temp }) {
  return (
    <div className="container">
      <h3>{weekDey}</h3>
      <img src={imgURL} alt={"logo"} />
      <h3>{temp}</h3>
    </div>
  );  
}

export default WeatherContent;
