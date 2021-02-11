import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

const Heading = ({ index, SectionTitle }) => {
  const classes = useStyles();

  return (
    <h2 className="SectionHeading">
      <div className={classes.container}>
        {index}. {SectionTitle}
      </div>
    </h2>
  );
};

Heading.propTypes = {
  index: PropTypes.number,
  SectionTitle: PropTypes.string,
};

export default Heading;
