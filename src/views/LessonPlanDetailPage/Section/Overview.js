import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Image from "../../../components/Image";
import TagCloud from "../../../components/TagCloud";
import RichText from "../../../components/RichText";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const Overview = ({
  index,
  EstLessonTime,
  ForGrades,
  TargetSubject,
  SteamEpaulette,
  Text,
  Tags,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <h2 className="SectionHeading">
        <div className={classes.container}>{index}. Overview</div>
      </h2>

      <div className={classes.container + " Overview"}>
        <p>
          <strong>STEAM Epaulette:</strong> lesson interdisciplinarity by
          standards
        </p>

        <Image {...SteamEpaulette} />

        <GridContainer className="stats">
          <GridItem md={4} className="border-right">
            <h5>Est. Time: </h5>
            <p>{EstLessonTime}</p>
          </GridItem>
          <GridItem md={4} className="border-right">
            <h5>Grade(s): </h5>
            <p>{ForGrades}</p>
          </GridItem>
          <GridItem md={4}>
            <h5>Target Subject: </h5>
            <p>{TargetSubject}</p>
          </GridItem>
        </GridContainer>

        <RichText content={Text} />

        <GridContainer>
          <GridItem className="keywords">
            <h5>Keywords:</h5>
          </GridItem>
          <GridItem>{Tags && <TagCloud tags={Tags} />}</GridItem>
        </GridContainer>
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
  Text: PropTypes.string,
  Tags: PropTypes.array,
};

export default Overview;
