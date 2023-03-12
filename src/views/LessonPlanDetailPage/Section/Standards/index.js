import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RichText from "components/RichText";

import Subject from "./Subject";
import LearningObj from "../Overview";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";

import "./style.scss";

const useStyles = makeStyles(lessonPlanStyle);

const Standards = ({ Data, LearningObj }) => {
  const classes = useStyles();
  const [expanded, expand] = useState(false);
  const [expanded2, expand2] = useState(false);

  return (
    <div className={"Standards " + classes.container}>
      <ExpansionPanel
        className="ExpansionPanel LearningObj"
        
        expanded={!expanded2}
        onChange={() => expand2(!expanded2)}
      >
        <ExpansionPanelSummary
          className="ExpansionPanelSummary"
          expandIcon={<ExpandMoreIcon />}
        >
          {LearningObj &&
            <h3>Learning Objectives</h3>
          }
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.LearningObj}>
          <RichText content={LearningObj} />
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        className="ExpansionPanel"
        
        expanded={!expanded}
        onChange={() => expand(!expanded)}
      >
        <ExpansionPanelSummary
          className="ExpansionPanelSummary"
          expandIcon={<ExpandMoreIcon />}
        >
          <h3>Alignment Details</h3>
        </ExpansionPanelSummary>
        <div className={"clickInvitation"}>
          Note:&nbsp;
          <span className={"clickOn"}>
            Click on any standard
            <i className="fas fa-mouse-pointer" />
          </span>
          for details on how the lesson aligns to it.
        </div>
        <ExpansionPanelDetails className="ExpansionPanelDetails">
          <h3>Target Standard(s)</h3>
          <div className="StandardsExpl">
            Skills and concepts directly taught or reinforced by this lesson
          </div>
          {Data.filter(({ target }) => target).map((subject, i) => (
            <Subject  key={"target-" + i} {...subject} />
          ))}
          <h3>Connected Standard(s)</h3>
          <div className="StandardsExpl">
            Skills and concepts reviewed or hinted at in this lesson (for building upon)
          </div>
          {Data.filter(({ target }) => !target).map((subject, i) => (
            <Subject key={"connected-" + i} {...subject} />
          ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

Standards.propTypes = {
  Data: PropTypes.array,
  LearningObj: PropTypes.string
};

export default Standards;
