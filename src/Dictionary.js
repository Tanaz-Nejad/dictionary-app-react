import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [load, setLoad] = useState(false);
  const [keyword, setKeyword] = useState(props.defaultCity);
  const [data, setData] = useState(null);
  const [photo, setPhoto] = useState(null);

  function handleImages(response) {
    setPhoto(response.data.photos);
  }

  function handleResponse(response) {
    setData(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey = "563492ad6f917000010000017eb44f86b6fb4d85ac152435cdb5e294";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
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
          <h1 className="lookUp">What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={keywordSearch}
              defaultValue={props.defaultCity}
              className="searchForm"
            />
            <input type="submit" className="submitButton" />
          </form>
          <div className="hints">i.e. Sunset, Sunrise, Tea, Forest</div>
        </section>
        <Results data={data} />
        <Photos photo={photo} />
      </div>
    );
  } else loaded();
  return "loading...";
}
