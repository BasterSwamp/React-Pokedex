import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";

export default function SideNav({
  selectedPokemon,
  setSelectedPokemon,
  showSideMenu,
  handleCloseMenu,
}) {
  const [searchValue, setSearchValue] = useState("");

  const filteredPokemon = first151Pokemon.filter((el, elIndex) => {
    // if full pokedex number includes the current search value, return true
    if (getFullPokedexNumber(elIndex).includes(searchValue)) {
      return true;
    }
    // if the pokemon name includes the current search value, return true
    if (el.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    // otherwise, exclude value from the array
    return false;
  });
  return (
    <nav className={"" + (!showSideMenu ? "open" : "")}>
      <div
        onClick={handleCloseMenu}
        className={"header" + (!showSideMenu ? " open" : "")}
      >
        <button className="open-nav-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-gradient">Pokédex</h1>
      </div>
      <input
        placeholder="Enter a number or name"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {filteredPokemon.map((pokemon, pokemonIndex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon);
        return (
          <button
            onClick={() => {
              setSelectedPokemon(truePokedexNumber);
              handleCloseMenu();
            }}
            key={pokemonIndex}
            className={`nav-card${
              truePokedexNumber === selectedPokemon ? " nav-card-selected" : ""
            }`}
          >
            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
}
