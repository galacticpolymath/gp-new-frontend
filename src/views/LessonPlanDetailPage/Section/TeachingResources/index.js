import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import TeachingMethod from "./TeachingMethod";
import CollapsibleSection from "../CollapsibleSection";

import { METHODS } from "./constants";

import "./style.scss";
import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";

const useStyles = makeStyles(lessonPlanStyle);

const TeachingResources = ({
  index,
  SectionTitle,
  Data,
}) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      initiallyExpanded
      index={index}
      SectionTitle={SectionTitle}
    >
      <div className={classes.container}>
        {Data.classroom && (
          <TeachingMethod
            type={METHODS.IN_PERSON}
            key={METHODS.IN_PERSON}
            {...Data.classroom}
          />
        )}
        {Data.remote && (
          <TeachingMethod
            type={METHODS.REMOTE}
            key={METHODS.REMOTE}
            {...Data.remote}
          />
        )}
      </div>
    </CollapsibleSection>
  );
};

TeachingResources.propTypes = {
  SectionTitle: PropTypes.string,
  Data: PropTypes.object,
  TeachingMethod: PropTypes.array,
};

export default TeachingResources;
