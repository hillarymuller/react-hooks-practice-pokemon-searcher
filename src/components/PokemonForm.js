import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: ""
    }
  })

  console.log(formData.sprites.front);
  
  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value,})
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": formData.name,
        "hp": formData.hp,
        "sprites": {
          "front": formData.sprites.front,
          "back": formData.sprites.back
        }
      })
    })
    .then(r => r.json())
    .then(data => onAddPokemon(data))
  }

  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="sprites.front"
            value={formData.sprites.front}
            onChange={(e) => setFormData({...formData, [formData.sprites.front]: e.target.value})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="sprites.back"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
