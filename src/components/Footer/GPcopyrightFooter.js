import React from "react";
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import ComputerIcon from "@material-ui/icons/Computer";
const useStyles = makeStyles(aboutUsStyle);

export default function GPcopyrightFooter () {
  const classes=useStyles();

  return (
    <div className={classes.right} >
       made with{" "}
      <ComputerIcon className={classes.icon} /> by{" "}
      Galactic Polymath &copy;&nbsp;{1900 + new Date().getYear()}

    </div>
  )
}

GPcopyrightFooter.propTypes={
  Color: PropTypes.string
}