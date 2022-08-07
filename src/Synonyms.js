import React from "react";

export default function Synonyms(props) {
  if (props.synonym.synonyms.length) {
    return (
      <div className="Synonyms">
        <h2>Simliar:</h2>
        {props.synonym.synonyms.map(function (words, index) {
          if (words.length) {
            return (
              <ul key={index}>
                <li>{words}</li>
              </ul>
            );
          } else return null;
        })}
      </div>
    );
  }
}
