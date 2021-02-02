import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import aboutUsStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsStyle";

export default function JobVizHeader() {
  const useStyles = makeStyles(aboutUsStyle);
  const classes = useStyles();
  return (
    <>
      <h1
        className={classes.title}
        // style={{paddingLeft: 0, marginLeft:0}}
      >JobViz </h1>
      <h4
        className={classes.title}
        style={{ letterSpacing: "1.5px", fontWeight: 500 }}
      >
        A tool for middle and high school students to explore career possibilities.
        Browse, search, and share descriptions and stats for over a thousand jobs!
        <br />
        <br />
        What do you want to be?
      </h4>
    </>
  );
}
