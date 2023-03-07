import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon.png";
import "./App.css";
import PokemonList from "./PokemonList";

const App = () => {
  const [pokemon, setPokemon] = useState(""); // input value
  const [lower, setLower] = useState(""); // input value
  const [singlePokemon, setSinglePokemon] = useState([]); // pokemon array
  const [inErrorInput, setInErrorInput] = useState(false);
  const [type, setType] = useState("");
  const [moves, setMoves] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${lower}`);
      if (poke.status === 200) {
        const pokeJ = await poke.json();
        setSinglePokemon(pokeJ);
        setType(pokeJ.types[0].type.name);
        setMoves(pokeJ.moves.length);
        setImg(pokeJ.sprites["front_default"]);
        setLoading(false);
      } else {
        setLoading(true);
        alert("Not found " + pokemon);
      }
    };

    if (lower !== "") {
      fetchPokemonList();
      setPokemon("");
    }
  }, [lower]);

  const Search = () => {
    if (pokemon === "") {
      alert("Give a valid me a name to search");
      setInErrorInput(true);
    } else {
      setLower(pokemon.toLowerCase());
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center text-white bg-danger py-3 pb-4">
            <div>
              <img src={Pokemon} alt="pokemon" className="poke" />
            </div>
            <input
              type="text"
              placeholder="Enter name of Pokemon"
              value={pokemon}
              onChange={(e) => {
                setPokemon(e.target.value);
                setInErrorInput(false);
              }}
              className={`col-2 py-1 my-3 ${inErrorInput ? "invalid" : ""}`}
            />
            <button
              className="btn btn-warning py-1 px-2 mx-2 text-white fw-bold fs-5"
              onClick={Search}
            >
              See Stats{" "}
            </button>
          </div>
          {loading ? (
            <div className="col-12 text-center fs-2 fw-bold p-5 mt-5">
              Enter the name of the pokemon in the input field
            </div>
          ) : (
            <PokemonList
              singlePokemon={singlePokemon}
              moves={moves}
              type={type}
              img={img}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
