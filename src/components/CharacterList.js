import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterDetails from "./CharacterDetails";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  console.log(characters);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(`Data:`, response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="grid-view">
      {characters.map(character => (
        <CharacterDetails key={character.name} character={character} />
      ))}
    </section>
  );
}
