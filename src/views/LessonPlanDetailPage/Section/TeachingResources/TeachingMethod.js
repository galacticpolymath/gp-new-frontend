import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ResourceSummary from "./ResourceSummary";
import ResourceDownload from "./ResourceDownload/index";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const TeachingMethod = ({
  Title,
  ResourceSummary: Summary,
  ResourceDownloads = [],
  expanded,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <ExpansionPanel
      className={"TeachingMethod"}
      onChange={onChange}
      expanded={expanded}
    >
      <ExpansionPanelSummary
        className="ExpansionPanelSummary"
        expandIcon={<ExpandMoreIcon />}
      >
        <h3>{Title}</h3>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.container}>
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
  index: PropTypes.number,
  Title: PropTypes.string,
  ResourceSummary: PropTypes.object,
  ResourceDownloads: PropTypes.array,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
};

export default TeachingMethod;
