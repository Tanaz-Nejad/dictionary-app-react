import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
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
        } else return null;
      })}
      <div>
        <Synonyms synonym={props.meaning} />
      </div>
    </div>
  );
}
