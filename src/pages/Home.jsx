import React, { useContext, useEffect } from "react";
import Navbar from '../components/Navbar'
import CardsFilms from "../components/CardsFilms";

const Home = () => {

  return (
    <div >
        <Navbar></Navbar>
        <CardsFilms></CardsFilms>
    </div>
  )
}

export default Home;
