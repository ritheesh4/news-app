import React from "react";
import "./nav-bar.styles.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import BreakingNews from "../breaking-news/breakingNews.component";
import { Route } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

import AddedWatchLater from "@material-ui/icons/PlaylistAddCheck";

const NavigationBar = () => (
  <AppBar style={{ background: "#DC143C" }} className="app-bar">
    <Toolbar>
      <Typography
        variant="h4"
        style={{
          width: "100%",
          fontWeight: "bold",
          fontFamily:
            "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        }}
      >
        News Times
      </Typography>
      <Route
        render={({ history }) => (
          <IconButton
            onClick={() => {
              // bookMarkItem({ title, publishedAt, image, description });
              history.push("/bookmarks");
            }}
            aria-label="add to favorites"
          >
            <AddedWatchLater />
          </IconButton>
        )}
      />{" "}
      <Route
        render={({ history }) => (
          <IconButton
            onClick={() => {
              history.push("/");
            }}
            aria-label="go home"
          >
            <HomeIcon />
          </IconButton>
        )}
      />
    </Toolbar>

    <BreakingNews />
  </AppBar>
);

export default NavigationBar;
