import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Image from "../../../components/Image";
import TagCloud from "../../../components/TagCloud";
import RichText from "../../../components/RichText";

const Overview = ({
  index,
  EstLessonTime,
  ForGrades,
  TargetSubject,
  SteamEpaulette,
  Text,
  Tags,
}) => {
  return (
    <Fragment>
      <h2 className="SectionHeading">
        <div className="container">{index}. Overview</div>
      </h2>

      <div className="container Overview">
        <p>
          <strong>STEAM Epaulette:</strong> lesson interdisciplinarity by
          standards
        </p>

        <Image {...SteamEpaulette} />

        <div className="row stats">
          <div className="border-right col-md-4">
            <h5>Est. Time: </h5>
            <p>{EstLessonTime}</p>
          </div>
          <div className="border-right col-md-4">
            <h5>Grade(s): </h5>
            <p>{ForGrades}</p>
          </div>
          <div className="col-md-4">
            <h5>Target Subject: </h5>
            <p>{TargetSubject}</p>
          </div>
        </div>

        <RichText content={Text} />

        <div className="row">
          <div className="col-md-auto keywords">
            <h5>Keywords:</h5>
          </div>
          <div className="col">{Tags && <TagCloud tags={Tags} />}</div>
        </div>
      </div>
    </Fragment>
  );
};

Overview.propTypes = {
  index: PropTypes.number,
  EstLessonTime: PropTypes.string,
  ForGrades: PropTypes.string,
  TargetSubject: PropTypes.string,
  SteamEpaulette: PropTypes.object,
  Text: PropTypes.object,
  Tags: PropTypes.object,
};

export default Overview;
