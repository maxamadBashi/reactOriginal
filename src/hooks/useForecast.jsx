import { useState, useEffect } from "react";
import axios from "axios";

export default function useForecast({ city }) {
  const [forecastData, setForecastData] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        try {
          setForecastLoading(true);
          setForecastError(null);
          const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast/daily", {
            params: {
              q: city,
              cnt: 7,
              appid: "your_forecast_api_key",
              units: "metric",
            },
          });
          setForecastData(response.data);
        } catch (error) {
          setForecastError(error);
        } finally {
          setForecastLoading(false);
        }
      };

      fetchData();
    }
  }, [city]);

  return { forecastData, forecastLoading, forecastError };
}
