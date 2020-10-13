import React from "react";
import "./cards-container.styles.scss";
import Card from "../card/card.component";
import Grid from "@material-ui/core/Grid";

const CardsContainer = () => (
  <div className='cards-container'>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />

  </div>
);

export default CardsContainer;
