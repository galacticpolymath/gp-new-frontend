import React from "react";
import PropTypes from "prop-types";

const Heading = ({ index, SectionTitle }) => (
  <h2 className="SectionHeading">
    <div className="container">
      {index}. {SectionTitle}
    </div>
  </h2>
);

Heading.propTypes = {
  index: PropTypes.number,
  SectionTitle: PropTypes.string,
};

export default Heading;
