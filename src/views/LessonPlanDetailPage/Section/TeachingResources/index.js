import React from "react";
import PropTypes from "prop-types";

import TeachingMethod from "./TeachingMethod";

import "./style.scss";

const TeachingResources = ({ TeachingMethod: TeachingMethods = [] }) =>
  TeachingMethods.map((method, i) => (
    <TeachingMethod
      index={i + 1} // Accordion keys must be positive
      key={i}
      {...method}
    />
  ));

TeachingResources.propTypes = {
  TeachingMethod: PropTypes.array,
};

export default TeachingResources;
