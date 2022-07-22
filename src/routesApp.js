import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Repositories from "./pages/Repositories";
import App from "./pages/Home";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/repositories" element={<Repositories/>} />
      </Routes>
    </BrowserRouter>
  );
}
