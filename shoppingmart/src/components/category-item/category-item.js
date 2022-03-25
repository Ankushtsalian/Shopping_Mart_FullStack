import React from "react";
import "./category-item.styles.scss";
const Categoryitem = (props) => {
  const {
    category: { title, id, imageUrl },
  } = props;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default Categoryitem;
