import React from "react";
import "./nav-bar.styles.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavigationBar = () => (
  <AppBar positionFixed style={{ background: "#DC143C" }}>
    <Toolbar>News</Toolbar>
  </AppBar>
);

export default NavigationBar;
