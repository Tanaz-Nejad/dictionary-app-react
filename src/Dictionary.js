import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function keywordSearch(event) {
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
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
