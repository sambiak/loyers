import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Adresse } from "./Adresse";
import { Entree_surface } from "./surface";

function App() {
  const [surface, setSurface] = useState<number>(0);

  return (
    <div className="App">
      <Adresse></Adresse>
      <Entree_surface surface={surface} setSurface={setSurface}/>
    </div>
  );
}

export default App;
