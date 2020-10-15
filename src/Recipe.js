import React from "react";


const Recipe = ({title, calories, image, time, url, healthLabels}) => {
  return (
    <div className="card col-md-4 ">
      <div className="card-item">
        <img className="card-img-top" src={image} alt={title}/>
        <div className="card-body">
          <h5 className="card-title text-danger">{title} <small className="text-muted">contains <span
            className="text-danger font-weight-bold"> {calories.toFixed(2)} </span> calories takes <span
            className="text-danger font-weight-bold"> {time}</span> minutes to cook. </small>
          </h5>
          <a rel="noopener noreferrer" className="btn btn-danger button-link" target="_blank"  href={url} >
           LET'S COOK
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
