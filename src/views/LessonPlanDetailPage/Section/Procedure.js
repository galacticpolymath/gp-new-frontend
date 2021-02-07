import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Procedure = ({ index, SectionTitle, LessonDuration }) => {
  return (
    <Fragment>
      <h2>
        <div className="container">
          {index}. {SectionTitle}
        </div>
      </h2>

      <div className="container">
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
