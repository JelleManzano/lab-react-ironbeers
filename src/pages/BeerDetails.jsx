import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BeerDetails(props) {
  const { beerId } = useParams();

  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      });
  });

  return (
    <div>
      <img src={beer.image_url} alt="beer" />
      <h2>{beer.name}</h2>
      <h4>{beer.tagline}</h4>
      <h4>{beer.first_brewed}</h4>
      <h4>{beer.attenuation_level}</h4>
      <h4>{beer.description}</h4>
      <h4>{beer.contributed_by}</h4>
    </div>
  );
}

export default BeerDetails;
