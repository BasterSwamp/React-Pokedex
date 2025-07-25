import { useState } from "react";

import Header from "./components/Header";
import PokeCard from "./components/PokeCard";
import SideNav from "./components/SideNav";

export default function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [showSideMenu, setShowSideMenu] = useState(true);

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }

  function handleCloseMenu() {
    setShowSideMenu(true);
  }
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
        handleCloseMenu={handleCloseMenu}
        showSideMenu={showSideMenu}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}
