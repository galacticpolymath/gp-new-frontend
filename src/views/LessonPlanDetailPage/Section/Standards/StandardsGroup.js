import React, { useState } from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RichText from "components/RichText";

const StandardsGroup = ({ codes, alignmentNotes, statements }) => {
  const [expanded, expand] = useState(false);

  return (
    <ExpansionPanel expanded={expanded} onChange={() => expand(!expanded)}>
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        {[].concat(codes).map((code, i) => (
          <p key={i}>
            <strong>{code}:</strong> {[].concat(statements)[i]}
          </p>
        ))}
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <h5>How does the lesson align to this standard?</h5>
        <RichText content={alignmentNotes.replace("•", "-")} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

StandardsGroup.propTypes = {
  codes: PropTypes.oneOf([PropTypes.string, PropTypes.array]),
  statements: PropTypes.oneOf([PropTypes.string, PropTypes.array]),
  alignmentNotes: PropTypes.string,
};

export default StandardsGroup;
