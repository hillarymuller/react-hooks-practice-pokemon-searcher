import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


function PokemonCollection({ pokemons }) {

  const pokeCards = pokemons.map(pokemon => 
    <PokemonCard pokemon={pokemon} key={pokemon.id} />)

  return (
    <Card.Group itemsPerRow={6}>
      {pokeCards}
    </Card.Group>
  );
}

export default PokemonCollection;
