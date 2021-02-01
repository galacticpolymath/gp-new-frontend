import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import aboutUsStyle from "../../../assets/jss/material-kit-pro-react/views/aboutUsStyle";

export default function JobVizHeader() {
  const useStyles = makeStyles(aboutUsStyle);
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.title}>JobViz </h1>
      <h4
        className={classes.title}
        style={{ letterSpacing: "1.5px", fontWeight: 500 }}
      >
        For middle and high school students to explore career possibilities. See
        how fields relate and overlap, and get a glimpse at industry education
        and financial data.
        <br />
        <br />
        What do you want to be?
      </h4>
    </>
  );
}
