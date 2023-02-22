import React from "react";
import { Navbar } from "./components/Navbar";
import { CuadroPrincipal } from "./components/CuadroPrincipal";
import "./app.css";



const App = () => {
  return (
    <div>
      <Navbar/>
      <CuadroPrincipal/>
    </div>
  );
};

export default App;
