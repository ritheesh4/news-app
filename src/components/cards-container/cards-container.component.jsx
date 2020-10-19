import React from "react";
import "./cards-container.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../card/card.component";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const CardsContainer = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className='fade-in'>
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
  try {
    const result = { ...state.news.newsList.news };
    console.log();
    return { result: Object.values(result) };
  } catch {}
  console.log("hello");
  return { newsList: [0] };
};

export default connect(mapStateToProps)(CardsContainer);
