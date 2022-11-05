import React from "react";
import { Link } from "react-router-dom";
import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <img src={Beers} alt="beer" />
      <Link to="/beers">Beers</Link>
      <br />
      <img src={RandomBeer} alt="randombeer" />
      <Link to="/randombeer">RandomBeer</Link>
      <br />
      <img src={NewBeer} alt="newbeer" />
      <Link to="/new-beer">Create a Beer</Link>
    </div>
  );
}

export default Home;
