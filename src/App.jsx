import "./styles/index.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TsPage from "./Component/pages/TsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
