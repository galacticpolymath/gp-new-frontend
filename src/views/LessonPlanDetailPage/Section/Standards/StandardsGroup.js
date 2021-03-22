import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RichText from "components/RichText";

import { formatAlignmentNotes } from "./utils";

const StandardsGroup = ({ codes, alignmentNotes, statements }) => {
  const [expanded, expand] = useState(false);

  return (
    <ExpansionPanel
      className="StandardsGroup"
      expanded={expanded}
      onChange={() => expand(!expanded)}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary codes"
        expandIcon={<ExpandMoreIcon />}
      >
        {[].concat(codes).map((code, i) => (
          <p key={i}>
            <strong>{code}:</strong> {[].concat(statements)[i]}
          </p>
        ))}
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className="alignmentNotes">
        <h6>How does the lesson align to this standard?</h6>
        <RichText content={formatAlignmentNotes(alignmentNotes)} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

StandardsGroup.propTypes = {
  codes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  statements: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  alignmentNotes: PropTypes.string,
};

export default StandardsGroup;
