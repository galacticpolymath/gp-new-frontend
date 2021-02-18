import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import TeachingMethod from "./TeachingMethod";

import "./style.scss";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const TeachingResources = ({ TeachingMethod: TeachingMethods = [] }) => {
  const classes = useStyles();
  const [expandedMethod, expandMethod] = useState(0);

  const handleChange = (method) => {
    expandMethod(method === expandedMethod ? null : method);
  };

  return (
    <div className={classes.container}>
      {TeachingMethods.map((method, i) => (
        <TeachingMethod
          expanded={expandedMethod === i}
          onChange={() => handleChange(i)}
          index={i + 1} // Accordion keys must be positive
          key={i}
          {...method}
        />
      ))}
    </div>
  );
};

TeachingResources.propTypes = {
  TeachingMethod: PropTypes.array,
};

export default TeachingResources;
