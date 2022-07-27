import axios from "axios";
import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState("");

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={keywordSearch} />
          <input type="submit" />
        </form>
        <h1>{keyword}</h1>
      </section>
    </div>
  );
}
