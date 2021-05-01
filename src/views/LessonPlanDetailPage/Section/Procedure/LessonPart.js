import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import RichText from "components/RichText";
const useStyles = makeStyles(lessonPlanStyle);

const LessonPart = ({ partNum, partTitle, partDur, partPreface, chunks }) => {
  const classes = useStyles();
  const [expanded, expand] = useState(false);
  return (
    <ExpansionPanel
      className={"ExpansionPanel LessonPart"}
      expanded={expanded}
      onChange={() => expand(!expanded)}
    >
      <div
        id={partTitle.replace(/\s+/g, "_").toLowerCase()}
        className={"PartPreface " + classes.container}
      >
        <ExpansionPanelSummary
          className="ExpansionPanelSummary"
          expandIcon={<ExpandMoreIcon />}
        >
          <div>
            <h3>
              Part {partNum}: {partTitle}
            </h3>
            <RichText content={partPreface} />
          </div>
        </ExpansionPanelSummary>
      </div>
      <ExpansionPanelDetails className="ExpansionPanelDetails PartBody">
        <RichText content={partPreface} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

LessonPart.propTypes = {
  partNum: PropTypes.number,
  partTitle: PropTypes.string,
  partDur: PropTypes.string,
  partPreface: PropTypes.string,
  chunks: PropTypes.array,
};

export default LessonPart;
