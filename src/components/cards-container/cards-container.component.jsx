import React from "react";
import "./cards-container.styles.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

const CardsContainer = (props) => {
  return (
    <div className="cards-container">
      {props.result
        ? props.result.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              image={item.urlToImage}
              description={item.description}
            />
          ))
        : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  try {
    const result = { ...state.news.newsList.news };
    console.log();
    return { result: Object.values(result) };
  } catch {}
  console.log("hello");
  return { newsList: [0] };
};

export default connect(mapStateToProps)(CardsContainer);
