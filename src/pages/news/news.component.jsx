import React from "react";
import "./news.styles.scss";
import NavigationBar from "../../components/nav-bar/nav-bar.component";

const News = (props) => (
  <div className="news-container">{console.log(props)}
    <NavigationBar />
    <div className="news-details">
      <div className="title">sadfffffffffffffffff</div>
      <div className="image"></div>
      <div className="news-content">asdfffffffffff</div>
    </div>
  </div>
);

export default News;
