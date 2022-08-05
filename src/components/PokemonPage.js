import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
fetch ('http://localhost:3001/pokemon')
.then (r => r.json())
.then(data => setPokemons(data))
  }, []);

  function onSearch(search) {
    setSearch(search)
  }

  function onAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  const searchedPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={onAddPokemon} />
      <br />
      <Search search={search} onSearch={onSearch} />
      <br />
      <PokemonCollection pokemons={searchedPokemons} />
    </Container>
  );
}

export default PokemonPage;
