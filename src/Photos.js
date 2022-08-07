import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photo)
    return (
      <section className="Photos">
        <div className="row">
          {props.photo.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.landscape} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
}
