import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonym.synonyms.length) {
    return (
      <div className="Synonyms">
        <h2 className="similar">similar:</h2>
        {props.synonym.synonyms.map(function (words, index) {
          if (words.length) {
            return (
              <ul key={index} className="synonymsList">
                <li>{words}</li>
              </ul>
            );
          } else return null;
        })}
      </div>
    );
  }
}
