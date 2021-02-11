import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer";
import Image from "../../../components/Image";
import TagCloud from "../../../components/TagCloud";
import RichText from "../../../components/RichText";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

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
          <Grid md={4} className="border-right">
            <h5>Est. Time: </h5>
            <p>{EstLessonTime}</p>
          </Grid>
          <Grid md={4} className="border-right">
            <h5>Grade(s): </h5>
            <p>{ForGrades}</p>
          </Grid>
          <Grid md={4}>
            <h5>Target Subject: </h5>
            <p>{TargetSubject}</p>
          </Grid>
        </GridContainer>

        <RichText content={Text} />

        <GridContainer>
          <Grid className="keywords">
            <h5>Keywords:</h5>
          </Grid>
          <div className="col">{Tags && <TagCloud tags={Tags} />}</div>
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
  Text: PropTypes.object,
  Tags: PropTypes.object,
};

export default Overview;
