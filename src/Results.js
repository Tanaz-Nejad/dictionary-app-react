import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <section>
          <h1>{props.data.word}</h1>
        </section>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else return null;
}
