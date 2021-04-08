import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/lessons"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          Lessons
        </NavLink>
      </ListItem>
      {/* ///NAV BAR to JobViz */}
      <ListItem className={classes.listItem}>
        <NavLink
          to="/jobviz"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          JobViz
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/hire-us"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          Hire Us
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to="/about"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          About
        </NavLink>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "blackColor",
  ]),
};
