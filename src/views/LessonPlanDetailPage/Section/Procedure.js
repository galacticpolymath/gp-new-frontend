import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

const Procedure = ({ index, SectionTitle, LessonDuration }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <h2>
        <div className={classes.container}>
          {index}. {SectionTitle}
        </div>
      </h2>

      <div className={classes.container}>
        <p>
          <strong>
            <span role="img" aria-label="clock">
              ⏰
            </span>{" "}
            {LessonDuration}
          </strong>
        </p>
      </div>
    </Fragment>
  );
};

Procedure.propTypes = {
  index: PropTypes.number,
  SectionTitle: PropTypes.string,
  LessonDuration: PropTypes.string,
};

export default Procedure;
