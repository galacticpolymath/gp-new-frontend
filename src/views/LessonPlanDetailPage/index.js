import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import "./style.scss";

import { fetchOne } from "./modules/lessonsApi";
import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

const LessonPlan = () => {
  const classes = useStyles();
  const { lessonId } = useParams();

  const [lesson, setLesson] = useState(null);

  let numberedElements = 0;

  useEffect(() => {
    fetchOne(lessonId).then((data) => {
      setLesson(data);
    });
  }, [lessonId]);

  if (!lesson) return null;

  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) {
      numberedElements++;
    }
    return <Section key={i} index={numberedElements} section={section} />;
  };

  return (
    <Fragment>
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className={classes.LessonPlan}>
        <Header {...lesson} />

        {lesson.Section &&
          lesson.Section.map((section, i) => renderSection(section, i))}
      </div>
    </Fragment>
  );
};

export default LessonPlan;
