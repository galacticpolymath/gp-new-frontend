import React, { useState } from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const VariantPart = ({ part, title, preface, itemList, gradePrefix }) => {
  const [expanded, expand] = useState(false);
  return (
    <ExpansionPanel
      className="VariantPart ExpansionPanel"
      onChange={() => expand(!expanded)}
      expanded={expanded}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <span>{gradePrefix}</span>
        <strong>
          Part {part}: {title}
        </strong>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        {preface}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default VariantPart;
