import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import cachedLessons from "./data/lesson-plans.json";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'

const LessonPlan = ({ location }) => {
  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const { lessonId } = useParams();
  const lesson = cachedLessons.find(({ id }) => id.toString() === lessonId.toString())

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
      <Helmet>
        <title>Galactic Polymath | {lesson.Title}</title>
        <meta name="description" content={lesson.Subtitle} />
        <meta property="og:title" content={`Galactic Polymath | ${lesson.Title}`} />
        <meta property="og:description" content={lesson.Subtitle} />
        <meta property="og:image" content={lesson.CoverImage.url} />
        <meta property="og:url" content={`https://galacticpolymath.com/lessons/${lessonId}`} />
      </Helmet>
      
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">

        <Header location={location} {...lesson} />

        {lesson.Section &&
          lesson.Section.map((section, i) => renderSection(section, i))}
      </div>

      <NavigationDots sections={lesson.Section} />
    </Fragment>
  );
};

export default LessonPlan;
