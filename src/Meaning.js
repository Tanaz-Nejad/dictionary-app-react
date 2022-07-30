import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 1) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
            </div>
          );
        }
      })}
      {props.meaning.synonyms.map(function (synonym, index) {
        return (
          <div>
            <Synonyms synonym={synonym} />
          </div>
        );
      })}
    </div>
  );
}
