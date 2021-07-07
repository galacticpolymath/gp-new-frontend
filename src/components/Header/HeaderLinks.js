import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "@reach/router";

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
        <Link
          to="/"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
          exact
        >
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/lessons"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          Lessons
        </Link>
      </ListItem>
      {/* ///NAV BAR to JobViz */}
      <ListItem className={classes.listItem}>
        <Link
          to="/jobviz"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          JobViz
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/hire-us"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          Hire Us
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link
          to="/about"
          className={classes.navLink}
          activeStyle={{ fontWeight: "bold" }}
        >
          About
        </Link>
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
