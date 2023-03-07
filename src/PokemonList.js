import React from "react";
import Rock from "./Rock.jpg";
const PokemonList = ({ singlePokemon, type, moves, img }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-5 text-center">
          <div className="col-4"></div>
          <div className="pokemon py-4">
            <div id="img">
              <img src={Rock} alt="rock" id="image" />
              <div className="img">
                <img src={img} alt={singlePokemon.name} className="image" />
              </div>
            </div>
            <div className="text-capitalize fs-1 fw-bold">
              {singlePokemon.name}
            </div>
            <div className="tet-capitalize text-start py-2">
              <div className="fs-4 text-capitalize d-flex justify-content-between">
                <span className="fs-4 fw-bold">Type</span>
                <span className="fs-5">{type}</span>
              </div>
              <div className="fs-4 text-capitalize d-flex justify-content-between">
                <span className="fs-4 fw-bold">Weight</span>
                <span className="fs-5">{singlePokemon.weight}lbs</span>
              </div>
              <div className="fs-4 text-capitalize d-flex justify-content-between">
                <span className="fs-4 fw-bold">Height</span>
                <span className="fs-5">{singlePokemon.height}"</span>
              </div>
              <div className="fs-4 text-capitalize d-flex justify-content-between">
                <span className="fs-4 fw-bold">Battles Won</span>
                <span className="fs-5">{singlePokemon.base_experience}</span>
              </div>
              <div className="fs-4 text-capitalize d-flex justify-content-between">
                <span className="fs-4 fw-bold">No. of Moves</span>
                <span className="fs-5">{moves}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonList;
