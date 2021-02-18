import React from "react";
import PropTypes from "prop-types";

import RichText from "../../../../../components/RichText";
import SimpleResourceDownload from "./Simple";

import "./style.scss";

const VariableResourceDownload = ({ Title, Description, Variations = [] }) => {
  return (
    <div className="VariableResourceDownload">
      <RichText content={"**" + Title + ":** " + Description} />
      <div className="variations">
        <p>Differentiated versions:</p>
        {Variations.map((item, i) => (
          <SimpleResourceDownload key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

VariableResourceDownload.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.string,
  Variations: PropTypes.array,
};

export default VariableResourceDownload;
