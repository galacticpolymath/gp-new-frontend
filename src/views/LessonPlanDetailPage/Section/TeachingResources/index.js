import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import TeachingMethod from "./TeachingMethod";
import TeachingMethod2 from "./TeachingMethod2";
import CollapsibleSection from "../CollapsibleSection";

import { METHODS } from "./constants";

import "./style.scss";
import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";

const useStyles = makeStyles(lessonPlanStyle);

const TeachingResources = ({
  index,
  SectionTitle,
  Data,
  TeachingMethod: TeachingMethods = [],
}) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      initiallyExpanded
      index={index}
      SectionTitle={SectionTitle}
    >
      <div className={classes.container}>
        {Data ? (
          <Fragment>
            {Data.hasOwnProperty("classroom") && (
              <TeachingMethod2
                type={METHODS.IN_PERSON}
                key={METHODS.IN_PERSON}
                {...Data.classroom}
              />
            )}
            {Data.hasOwnProperty("remote") && (
              <TeachingMethod2
                type={METHODS.REMOTE}
                key={METHODS.REMOTE}
                {...Data.remote}
              />
            )}
          </Fragment>
        ) : (
          TeachingMethods.map((method, i) => (
            <TeachingMethod key={i} {...method} />
          ))
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
