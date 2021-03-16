import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import "./style.scss";
import lessons from "./data/lesson-plans.json";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

const LessonPlan = () => {
  const { lessonId } = useParams();

  const lesson = lessons.find(
    ({ id }) => id.toString() === lessonId.toString()
  );

  let numberedElements = 0;

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
      <div className="LessonPlan">
        <Header {...lesson} />

        {lesson.Section &&
          lesson.Section.map((section, i) => renderSection(section, i))}
      </div>
    </Fragment>
  );
};

export default LessonPlan;
