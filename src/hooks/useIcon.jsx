export default function useIcon({ description }) {
  const iconMapping = {
    clear: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sun.svg",
    clouds: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg",
    rain: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg",
    snow: "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    // Add more mappings as needed
  };

  const key = Object.keys(iconMapping).find(key => description.includes(key)) || "clear";
  return iconMapping[key];
}
