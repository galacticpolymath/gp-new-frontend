import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import RichText from "../../../components/RichText";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

const TextBlock = ({ Content }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <RichText content={Content} />
    </div>
  );
};

TextBlock.propTypes = {
  Content: PropTypes.string,
};

export default TextBlock;
