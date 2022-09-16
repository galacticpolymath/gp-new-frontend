import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// @mui material icons
import MailIcon from "@material-ui/icons/Mail";
import { RateReviewOutlined } from "@material-ui/icons";

import LessonHelperText from "components/LessonHelperText";
import TeachingMethod from "./TeachingMethod";
import CollapsibleSection from "../CollapsibleSection";

import { METHODS } from "./constants";

import "./style.scss";
import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import AnchorLink from "react-anchor-link-smooth-scroll";

const useStyles = makeStyles(lessonPlanStyle);

const TeachingResources = ({
  index,
  SectionTitle,
  Data: {
    classroom,
    remote
  },
}) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      initiallyExpanded
      index={index}
      SectionTitle={SectionTitle}
    >
      <div className={classes.container}>
        {classroom && remote && <LessonHelperText text="Click a category for more details" />}
        {classroom && (
          <TeachingMethod
            type={METHODS.IN_PERSON}
            key={METHODS.IN_PERSON}
            initiallyExpanded={!remote}
            {...classroom}
          />
        )}
        {remote && (
          <TeachingMethod
            type={METHODS.REMOTE}
            key={METHODS.REMOTE}
            initiallyExpanded={!classroom}
            {...remote}
          />
        )}
        <GridContainer style={{border: "1pt solid #363636",marginBottom: "1.5rem"}}>
          <GridItem>
          <h5>Please help us make more lessons like this!</h5>
            <a href="https://bit.ly/gpEmails" target="_blank" rel="noopener noreferrer">
              <MailIcon style={{marginBottom:"-0.35rem",marginRight:"0.25rem"}}/> 
              Subscribe to emails
            </a>
            <div style={{marginBottom:"1rem"}}>
            <AnchorLink href="#feedback" offset="125px">
             <RateReviewOutlined style={{marginBottom:"-0.35rem",marginRight:"0.25rem"}}/> 
             Give feedback to help us measure impact and improve
            </AnchorLink>
            </div>
          </GridItem>
        </GridContainer>
      
      </div>
    </CollapsibleSection>
  );
};

TeachingResources.propTypes = {
  SectionTitle: PropTypes.string,
  Data: PropTypes.shape({
    classroom: PropTypes.object,
    remote: PropTypes.object,
  }),
  TeachingMethod: PropTypes.array,
};

export default TeachingResources;
