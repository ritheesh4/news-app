import React from "react";
import "./cards-container.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

const CardsContainer = (props) => {
  window.scrollTo(0, 0);
  return (
    <Grid
      container
      spacing={3}
      className="fade-in"
      style={{ width: "95vw", margin: "auto" ,minHeight:"83.4vh"}}
    >
      {props.result
        ? props.result.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              image={item.urlToImage}
              description={item.description}
              publishedAt={item.publishedAt}
            />
          ))
        : ""}
    </Grid>
  );
};

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

export default connect(mapStateToProps)(CardsContainer);
