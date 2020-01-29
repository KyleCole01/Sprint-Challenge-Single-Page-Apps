import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCharacter from "./SearchCharacter";

const SearchForm = ({ onSearch }) => {
  const [character, setCharacter] = useState("");
  const [nameParam, setnameParam] = useState("");
  const [returnData, setReturnData] = useState([
    {
      name: "",
      status: "",
      species: "",
      gender: "",
      image: "",
      location: { name: "" }
    }
  ]);

  const handleInputChange = event => {
    setnameParam(event.target.value);
    console.log("character:", character);
  };

  const submitForm = event => {
    event.preventDefault();
    setnameParam(character);
    console.log("name:", nameParam);
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${nameParam}`)
      .then(response => {
        setReturnData(response.data.results);
        console.log(returnData);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, [nameParam]);

  return (
    <section className="search-form">
      <form onSubmit={submitForm}>
        <input
          placeholder="enter name"
          value={character.name}
          name="name"
          onChange={handleInputChange}
        />
      </form>
      <SearchCharacter data={returnData} />
    </section>
  );
};
export default SearchForm;
