import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        
        
            {/* <strong>{props.name}</strong>  */}
         
      </div>
      
    </div>
  );
}

export default FriendCard;
