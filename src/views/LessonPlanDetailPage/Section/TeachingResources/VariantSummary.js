import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
const useStyles = makeStyles(blogPostsPageStyle);

const VariantSummary = ({ variants = [] }) => {
  const [expanded, expand] = useState(true);
  const classes = useStyles();
  return (
    <ExpansionPanel
      className="VariantSummary ExpansionPanel"
      onChange={() => expand(!expanded)}
      expanded={expanded}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <h4>Grade Level Variations:</h4>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="ExpansionPanelDetails">
        {variants.partGradVarNotes && <Box boxShadow={3} className={classes.card}>
          {variants.map(({ part, partGradeVarNotes }, i) => (
            <p key={i}>
              <strong>Part {part}:</strong> {partGradeVarNotes}
            </p>
          ))}
        </Box>
        }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default VariantSummary;
