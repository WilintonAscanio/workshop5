import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "../components/chart/Chart";
import Home from "../components/home/Home";
import InfoHome from "../components/infoHome/InfoHome";
import InfoPizza from "../components/infoPizza/InfoPizza";
import Pizza from "../components/pizzas/Pizza";
import SearchPizzas from "../components/searchPizza/SearchPizzas";
import SignUp from "../components/signUp/SignUp";
import Animation from "../components/animation/Animation";
import Details from "../components/infoHome/Details";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='infoHome' element={<InfoHome />}>

          <Route path='chart' element={<Chart />} />



          <Route path="details" element={<Details />} />

          <Route path='searchPizza' element={<SearchPizzas />} />



        </Route>

        <Route path='infoPizza' element={<InfoPizza />}>
          <Route path=':pizzas' element={<Pizza />} />
        </Route>
        <Route path='animation' element={<Animation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
