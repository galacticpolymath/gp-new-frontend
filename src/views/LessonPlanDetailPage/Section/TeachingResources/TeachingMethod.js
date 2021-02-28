import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ResourceSummary from "./ResourceSummary";
import ResourceDownload from "./ResourceDownload/index";

const TeachingMethod = ({
  Title,
  ResourceSummary: Summary,
  ResourceDownloads = [],
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
        <h3>{Title}</h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        <div>
          <ResourceSummary {...Summary} />
          {ResourceDownloads.map((resource, i) => (
            <ResourceDownload key={i} {...resource} />
          ))}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

TeachingMethod.propTypes = {
  Title: PropTypes.string,
  ResourceSummary: PropTypes.object,
  ResourceDownloads: PropTypes.array,
};

export default TeachingMethod;
