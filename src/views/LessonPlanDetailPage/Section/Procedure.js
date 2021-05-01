import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import RichText from "components/RichText";
import CollapsibleSection from "./CollapsibleSection";

const useStyles = makeStyles(lessonPlanStyle);

const Procedure = ({ index, SectionTitle, LessonDuration, Chunks }) => {
  const classes = useStyles();
  return (
    <CollapsibleSection
      className="Procedure"
      index={index}
      SectionTitle={SectionTitle}
      initiallyExpanded
    >
      <div className={classes.container}>
        <h4>
          <span role="img" aria-label="clock">
            ⏰
          </span>{" "}
          {LessonDuration}
        </h4>

        <RichText content={Chunks} />
      </div>
    </CollapsibleSection>
  );
};

Procedure.propTypes = {
  index: PropTypes.number,
  SectionTitle: PropTypes.string,
  LessonDuration: PropTypes.string,
  Chunks: PropTypes.string,
};

export default Procedure;
