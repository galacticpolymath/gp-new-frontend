import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import pricingStyle from "../../../assets/jss/material-kit-pro-react/views/pricingStyle";


export default function JobVizHeader() {
    const useStyles = makeStyles(pricingStyle);
    const classes=useStyles();
    return(
    <>
      <h1 className={classes.title}>JOBVIZ </h1>
      <h4>
        For middle and high school students to explore career possibilities. See
        how fields relate and overlap, and get a glimpse at industry education
        and financial data.
      <br/>
      <br/>
      What do you want to be?
      </h4>
    </>
)
}