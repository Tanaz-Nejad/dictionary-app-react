import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [load, setLoad] = useState(false);
  const [keyword, setKeyword] = useState(props.defaultCity);
  const [data, setData] = useState("");

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function loaded() {
    setLoad(true);
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (load) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={keywordSearch}
              className="searchForm"
              defaultValue={props.defaultCity}
            />
            <input type="submit" className="submitButton" />
          </form>
        </section>
        <Results data={data} />
      </div>
    );
  } else loaded();
  return "loading...";
}
