import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ResourceSummary2 from "./ResourceSummary2";
import Variants from "./Variants";

import { COPY, ICONS, TITLES } from "./constants";

const TeachingMethod2 = ({
  type,
  resourceSummary,
  gradeVariantNotes,
  resources,
}) => {
  const [expanded, expand] = useState(false);

  return (
    <ExpansionPanel
      className="TeachingMethod ExpansionPanel"
      onChange={() => expand(!expanded)}
      expanded={expanded}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <div>
          <h3>
            {ICONS[type]} {TITLES[type]}
          </h3>
          {COPY[type]}
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        <ResourceSummary2 resources={resourceSummary} />
        <Variants variants={gradeVariantNotes} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

TeachingMethod2.propTypes = {
  type: PropTypes.string,
  resourceSummary: PropTypes.array,
  gradeVariantNotes: PropTypes.array,
  resources: PropTypes.array,
};

export default TeachingMethod2;
