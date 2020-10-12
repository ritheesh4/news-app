import React from "react";
import "./cards-container.styles.scss";
import Card from "../card/card.component";
import Grid from "@material-ui/core/Grid";

const CardsContainer = () => (
  <Grid container direction="row" alignItems="center" justify={"space-around"} rows ={4}>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Grid>
);

export default CardsContainer;
