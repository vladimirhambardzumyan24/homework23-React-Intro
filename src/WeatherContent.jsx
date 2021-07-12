import "./WeatherContent.css";

function WeatherContent({ id, weekDey, imgURL, temp }) {
  return (
    <div key={id} className="container">
      <h3>{weekDey}</h3>
      <img src={imgURL} alt={"logo"} />
      <h3>{temp}</h3>
    </div>
  );
}

export default WeatherContent;
