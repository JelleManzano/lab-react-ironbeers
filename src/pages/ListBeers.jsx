import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeers(props) {
  const [beersList, setListOfBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setListOfBeers(response.data);
    });
  }, []);

  return (
    <div>
      <h3>List Of Beers</h3>

      {beersList.map((eachBeer, index) => (
        <div key={index} className="card">
          <img src={eachBeer.image_url} alt="beer" width="80px" />
          <h3>{eachBeer.name}</h3>
          <h4>{eachBeer.tagline}</h4>
          <h4>{eachBeer.contributed_by}</h4>
          <Link to={`/beers/${eachBeer._id}`}>More Info</Link>
        </div>
      ))}
    </div>
  );
}

export default ListBeers;
