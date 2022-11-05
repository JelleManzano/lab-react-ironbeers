import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import ListBeers from "./pages/ListBeers";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
        <Route path="/randombeer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />}  />
      </Routes>
    </div>
  );
}

export default App;
