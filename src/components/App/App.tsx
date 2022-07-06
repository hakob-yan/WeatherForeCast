import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Home } from "../../containers/Home/Home";
import { Cities } from "../../containers/Cities/Cities";
import { Pages } from "../../constants/Route"
import * as Style from "./style"

const App = () => (
  <Style.App>
    <Navbar />
    <Routes>
      <Route path={Pages.Home} element={<Home />} />
      <Route path={Pages.Cities} element={<Cities />} />
    </Routes>
  </Style.App>
);

export default App;
