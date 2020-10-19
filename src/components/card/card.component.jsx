import React from "react";
import "./card.styles.scss";
import BookMark from "../bookmark/bookmark.component";

const Card = ({id, title, image, decription}) => (
  <div className="card" key={id}>
    <div className="news-title">{title}</div>
    <div className="image">
      <img src={image}></img>
    </div>
    <BookMark />
  </div>
);

export default Card;
