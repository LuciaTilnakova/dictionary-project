import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
    //documentation:https://dictionaryapi.dev/
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word would you like to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search"
            onChange={handleKeyword}
          ></input>
        </form>
        <div className="hint">search for: nature, wine, summer, yoga ...</div>
      </section>
      <Results results={results} />
    </div>
  );
}
