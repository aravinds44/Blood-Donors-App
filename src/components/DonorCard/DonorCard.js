import React from "react";
import "./DonorCard.css";
function DonorCard(props) {
  return (
    <div className="card-parent">
      <div className="card">

        <div className="exit-button"><button onClick={()=>props.onClose()} ><i className="far fa-times-circle fa-2x"></i></button></div>

      
        <div className="card-title">
          <h1>{props.details.name}</h1>
          <h2><i className="fas fa-tint"></i>{props.details.blood}</h2>
        </div>

        <div className="card-content">
          <p>
            <i className="far fa-envelope"></i> {props.details.email}
          </p>
          <p>
            <i className="fas fa-phone"></i>{props.details.phone}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>{props.details.place}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonorCard;
