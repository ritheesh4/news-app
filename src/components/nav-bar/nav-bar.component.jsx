import React from "react";
import "./nav-bar.styles.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const NavigationBar = () => (
  <AppBar position="static" style={{ background: "#2E3B55" }}>
    <Toolbar>News</Toolbar>
  </AppBar>
);

export default NavigationBar;
