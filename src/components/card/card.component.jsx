import React from "react";
import "./card.styles.scss";
import BookMark from '../bookmark/bookmark.component';

const Card = () => (
  <div className="card">
    <div className="news-title">hello</div>
    <div className="image">
      <img src="https://i.picsum.photos/id/612/200/300.jpg?hmac=vJ35AV5-TQa5ET5az0aESTnI3zaFCjRYD9OnYaiYIYc"></img>
    </div>
    <BookMark />
  </div>
);

export default Card;
