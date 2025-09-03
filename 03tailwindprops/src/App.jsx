import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const options = ["Home", "About", "Contact"];

  return (
    <>
      <Navbar opts={options} />
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card username="Hitesh" />
      <Card username="Json" post="Staff Engg." />
      <Card />
    </>
  );
}

export default App;
