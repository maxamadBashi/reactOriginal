import useIcon from "../hooks/useIcon";
import DataList from "./DataList";

export default function ForecastItem({ forecastData }) {
  const {
    dt,
    weather: [{ description }],
    temp,
    humidity,
    speed,
  } = forecastData;
  const day = new Date(dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  });

  const icon = useIcon({ description });

  const items = [
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thermometer.svg",
      primary: `${temp.max.toFixed()}°`,
      secondary: `${temp.min.toFixed()}°`,
    },
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg",
      primary: `${humidity} %`,
    },
    {
      src: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg",
      primary: `${speed.toFixed()} m/s`,
    },
  ];

  return (
    <li className="w-full sm:w-64 p-4 flex flex-col justify-center items-center border border-white border-opacity-25 rounded-xl bg-white bg-opacity-25 shadow-[0_0_16px_0_rgba(255,255,255,0.25)] backdrop-blur">
      <span className="text-xl">{day}</span>
      <img className="w-16 my-2" src={icon} alt="Weather" />
      <DataList items={items} />
    </li>
  );
}
