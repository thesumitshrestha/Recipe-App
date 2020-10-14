import React from "react";


const Recipe = ({title, calories, image, time, url, healthLabels}) => {
  return (
    <div className="card col-md-3">
      <img className="card-img-top" src={image} alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"><small className="text-muted">{calories} calories</small></p>
        <p> {time} minutes </p>
        <p className="card-test">
          {healthLabels.map(healthLabels => (
            <li>{healthLabels}</li>
          ))}
        </p>
        <a rel={title} target="_blank" href={url}> How to make it </a>
      </div>
    </div>
  );
}

export default Recipe;
