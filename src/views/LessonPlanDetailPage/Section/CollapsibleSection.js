import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { containsSearchTerm } from "utils/search";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const CollapsibleSection = ({
  index,
  SectionTitle = "",
  className = "",
  children,
  searchableData,
  initiallyExpanded = false,
  searchTerm,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(initiallyExpanded);

  useEffect(() => {
    if (searchTerm) {
      if (containsSearchTerm(searchTerm, searchableData)) {
        console.log('expand');
        setExpanded(true)
      }
    }
  }, [searchTerm, searchableData])

  return (
    <ExpansionPanel
      className={"ExpansionPanel CollapsibleSection " + className}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <div
        className="SectionHeading"
        id={SectionTitle.replace(/\s+/g, "_").toLowerCase()}
      >
        <div className={classes.container}>
          <ExpansionPanelSummary
            className="ExpansionPanelSummary"
            expandIcon={<ExpandMoreIcon />}
          >
            <h2>
              {index}. {SectionTitle}
            </h2>
          </ExpansionPanelSummary>
        </div>
      </div>
      <ExpansionPanelDetails className={"ExpansionPanelDetails "}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

CollapsibleSection.propTypes = {
  index: PropTypes.number,
  SectionTitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.object,
  initiallyExpanded: PropTypes.bool,
};

export default CollapsibleSection;
