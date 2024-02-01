import React from "react";

const CatCard = ({ item }) => {
  return (
    <div>
      <p>{item.price}</p>
      <img src={item.image} alt="" style={{width:50, height:50}}/>
    </div>
  );
};

export default CatCard;
