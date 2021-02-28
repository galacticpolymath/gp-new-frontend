import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
import RichText from "components/RichText";

const useStyles = makeStyles(lessonPlanStyle);

const Procedure = ({ index, SectionTitle, LessonDuration, Chunks }) => {
  const classes = useStyles();
  return (
    <div className="Procedure">
      <h2 className="SectionHeading">
        <div className={classes.container}>
          {index}. {SectionTitle}
        </div>
      </h2>

      <div className={classes.container}>
        <h4>
          <span role="img" aria-label="clock">
            ⏰
          </span>{" "}
          {LessonDuration}
        </h4>

        <RichText content={Chunks} />
      </div>
    </div>
  );
};

Procedure.propTypes = {
  index: PropTypes.number,
  SectionTitle: PropTypes.string,
  LessonDuration: PropTypes.string,
  Chunks: PropTypes.string,
};

export default Procedure;
