import React from "react";
import NavigationBar from "../../components/nav-bar/nav-bar.component";
import CardsContainer from "../../components/cards-container/cards-container.component";
import BreakingNews from "../../components/breaking-news/breakingNews.component";
import "./homepage.styles.scss";
const HomePage = () => (
  <div className="homepage">
    <NavigationBar />
    <BreakingNews />
    <CardsContainer />
  </div>
);

export default HomePage;
