import React from "react";
import CharacterCard from "./CharacterCard";
import CharacterDetails from "./CharacterDetails";

const SearchCharacter = props => {
  const data = props.data;
  return (
    <div className="grid-view">
      {data.map((character, index) => (
        <CharacterDetails key={index} character={character} />
      ))}
    </div>
  );
};
export default SearchCharacter;
