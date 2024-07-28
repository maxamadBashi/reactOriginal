import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  const [city, setCity] = useState("");

  const handleSearch = (c) => {
    if (c.trim()) {
      setCity(c);
    } else {
      console.error("Invalid city name");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white bg-[url('/src/assets/images/bg.svg')] bg-cover bg-center bg-bg">
      <Header onSearch={handleSearch} />
      <Main city={city} />
      <Footer />
    </div>
  );
}
