import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon;
  const [side, setSide] = useState(true);

  function handleClick() {
    setSide(side => !side);
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={side ? sprites.front : sprites.back} onClick={handleClick} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
