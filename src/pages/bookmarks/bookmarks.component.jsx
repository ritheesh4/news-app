import React from "react";
import NavigationBar from "../../components/nav-bar/nav-bar.component";
import CardsContainer from "../../components/cards-container/cards-container.component";
import Footer from '../../components/footer/footer.component';

import "./bookmarks.styles.scss";
const bookMarks = () => (
  <div className="bookmarksPage">
    <NavigationBar/>
    <CardsContainer />
    <Footer/>
  </div>
);

export default bookMarks;
