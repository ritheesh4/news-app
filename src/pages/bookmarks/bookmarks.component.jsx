import React from "react";
import NavigationBar from "../../components/nav-bar/nav-bar.component";
import CardsContainer from "../../components/cards-container/cards-container.component";

import "./bookmarks.styles.scss";
const bookMarks = () => (
  <div className="bookmarksPage">
    <NavigationBar/>
    <CardsContainer />
  </div>
);

export default bookMarks;
