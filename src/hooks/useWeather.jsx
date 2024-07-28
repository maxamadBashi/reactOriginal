import { useState, useEffect } from "react";
import axios from "axios";

export default function useWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        try {
          setWeatherLoading(true);
          setWeatherError(null);
          const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
              q: city,
              appid: "your_weather_api_key",
              units: "metric",
            },
          });
          setWeatherData(response.data);
        } catch (error) {
          setWeatherError(error);
        } finally {
          setWeatherLoading(false);
        }
      };

      fetchData();
    }
  }, [city]);

  return { weatherData, weatherLoading, weatherError };
}
