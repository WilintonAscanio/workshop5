import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "../components/chart/Chart";
import Home from "../components/home/Home";
import InfoHome from "../components/infoHome/InfoHome";
import InfoPizza from "../components/infoPizza/InfoPizza";
import SearchPizzas from "../components/searchPizza/SearchPizzas";
import SignUp from "../components/signUp/SignUp";
import Animation from "../components/animation/Animation";
import Details from "../components/infoHome/Details";
import Shopping from "../components/shopping/Shopping";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='infoHome' element={<InfoHome />}>





          <Route path="details" element={<Details />} />

          <Route path='searchPizza' element={<SearchPizzas />} />



        </Route>

        <Route path='infoPizza' element={<InfoPizza />} >
        </Route>
        <Route path='chart' element={<Chart />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path='animation' element={<Animation />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
