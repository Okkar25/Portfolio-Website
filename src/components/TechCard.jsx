import React from "react";

const TechCard = ({id, name, img}) => {
  return (
    <div className="cardInfo">
      <img src={img} alt="html" />
      <p>{name}</p>
    </div>
  );
};

export default TechCard;
