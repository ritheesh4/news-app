import React from "react";
import NavigationBar from "../../components/nav-bar/nav-bar.component";
import CardsContainer from "../../components/cards-container/cards-container.component";

import "./homepage.styles.scss";
const HomePage = () => (
  <div className="homepage">
    <NavigationBar/>
    <CardsContainer />
  </div>
);

export default HomePage;
