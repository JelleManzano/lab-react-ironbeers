import React from "react";
import { useState } from "react";
import axios from "axios";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBeer = {
      name: name,
      presentation: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post("https://ironbnb-m3.herokuapp.com/new", newBeer)
      .then((response) => {
        props.updateList();
      });
  };

  return (
    <div>
      <h3>Add New Beer</h3>

      <form>
        <label>name</label>
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <label>presentation</label>
        <input
          type="string"
          name="tagline"
          onChange={(event) => setTagline(event.target.value)}
          value={tagline}
        />
        <label>description</label>
        <input
          type="string"
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <label>first brewed</label>
        <input
          type="string"
          name="first_brewed"
          onChange={(event) => setFirst_brewed(event.target.value)}
          value={first_brewed}
        />
        <label>brewers tips</label>
        <input
          type="string"
          name="brewers_tips"
          onChange={(event) => setBrewers_tips(event.target.value)}
          value={brewers_tips}
        />
        <label>attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(event) => setAttenuation_level(event.target.value)}
          value={attenuation_level}
        />
        <label>contributed by</label>
        <input
          type="string"
          name="contributed_by"
          onChange={(event) => setContributed_by(event.target.value)}
          value={contributed_by}
        />

        <button onClick={handleSubmit}>Create New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
