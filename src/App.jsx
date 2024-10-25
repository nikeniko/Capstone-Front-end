import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import LoginForm from "./Components/LoginForm/LoginForm";
import TestDrive from "./Components/TestDrive/TestDrive";
import VehicleList from "./Components/Vehicle/VehicleList/VehicleList";
import VehicleForm from "./Components/Vehicle/VehicleForm/VehicleForm";
import RichiestaPreventivo from "./Components/Vehicle/RichiestaPreventivo/RichiestaPreventivo";


const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/testdrive" element={<TestDrive />} />
        <Route path="/vehicleform" element={<VehicleForm />} />
        <Route path="/vehiclelist" element={<VehicleList />} />
        <Route path="/richiesta-preventivo" element={<RichiestaPreventivo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
