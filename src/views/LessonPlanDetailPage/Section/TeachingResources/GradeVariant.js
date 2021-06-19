import React, { useState } from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DownloadIcon from "@material-ui/icons/GetApp";

const GradeVariant = ({ parts, grades, gradePrefix }) => {
  const [expanded, expand] = useState(false);
  return (
    <ExpansionPanel
      className="GradeVariant ExpansionPanel"
      onChange={() => expand(!expanded)}
      expanded={expanded}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <h5>{grades}</h5>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        <a className="download">
          <DownloadIcon />
          Download All {gradePrefix} Materials for All Parts
        </a>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default GradeVariant;
