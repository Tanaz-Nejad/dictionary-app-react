import React from "react";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        <a href={props.phonetic.audio} target="_Blank" rel="noreferrer">
          Listen
        </a>
        <h3>{props.phonetic.text}</h3>
      </div>
    );
  }
}
