import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Tag = ({ Value }) => {
  return <span className="Tag">{Value}</span>;
};

Tag.propTypes = {
  Value: PropTypes.string,
};

export default Tag;
