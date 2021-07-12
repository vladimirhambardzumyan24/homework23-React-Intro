import "./App.css";
import Weather from "./Weather";
import sunny from "./img/01.svg";
import raining from "./img/09.svg";
import cloudy from "./img/17.svg";

const weatherInfo = [
  {
    id: 1,
    weekDey: "Monday",
    imgURL: sunny,
    temp: "36C",
  },
  {
    id: 2,
    weekDey: "Tuesday",
    imgURL: cloudy,
    temp: "32C",
  },
  {
    id: 3,
    weekDey: "Wednesday",
    imgURL: raining,
    temp: "35C",
  },
  {
    id: 4,
    weekDey: "Thursday",
    imgURL: raining,
    temp: "45C",
  },
  {
    id: 5,
    weekDey: "Friday",
    imgURL: raining,
    temp: "36C",
  },
  {
    id: 6,
    weekDey: "Saturday",
    imgURL: sunny,
    temp: "37C",
  },
  {
    id: 7,
    weekDey: "Sunday",
    imgURL: cloudy,
    temp: "39C",
  },
];
function App() {
  return (
    <div className="App">
      <Weather weatherInfo={weatherInfo} />
    </div>
  );
}

export default App;
