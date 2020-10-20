import React from "react";
import "./nav-bar.styles.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import BreakingNews from "../breaking-news/breakingNews.component";

const styles = {
  root: {
    flexGrow: 1,
  },
  typography: {
    flexGrow: 1,
    align: "center",
  },
};

const NavigationBar = () => (
  <AppBar style={{ background: "#DC143C" }} className='app-bar'>
    <Toolbar >
      <Typography variant="h4"  >
        News Times
      </Typography>
    </Toolbar>
    <BreakingNews />
  </AppBar>
  
);

export default NavigationBar;
