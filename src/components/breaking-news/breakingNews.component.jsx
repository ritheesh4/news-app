import React from "react";
import { connect } from "react-redux";
import "./breakingNews.styles.scss";

const BreakingNews = (props) => (
  <div className="breaking-news"><h3>
    {props.result
      ? props.result.map((item) =>  item.title)
      : ""}
      </h3>
  </div>
);
const mapStateToProps = (state) => {
  if (window.location.pathname === "/bookmarks") {
    return { result: state.bookMarkItem };
  } else {
    try {
      const result = { ...state.news.newsList.news };
      return { result: Object.values(result) };
    } catch {}
    return { newsList: [0] };
  }
};

export default connect(mapStateToProps)(BreakingNews);
