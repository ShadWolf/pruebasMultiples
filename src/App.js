import React from "react";
import "./styles.css";

import CalcGananciaAcciones from "./components/CalcGananciaAcciones";
import ShortenUrl from "./components/ShortenUrl";
import SuperHeroes from "./components/SuperHeroes";

export default function App() {
  return (
    <div className="App">
      <CalcGananciaAcciones />
      <br />
      <ShortenUrl />
      <br />
      <SuperHeroes />
    </div>
  );
}
