import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { renderMetaTags } from "utils/meta";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

//import cachedLessons from "./data/lesson-plans.json";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'

export default function LessonPlan({ location }) {
  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const [wtf, setwtf] = useState([])

  useEffect(() => {
    fetch("https://catalog.galacticpolymath.com/index.json")
      .then(res => res.json())
      .then(result => setwtf(result))
  }, []);

  console.log(wtf)

  const { lessonId } = useParams();
  const lesson = wtf.find(({ id }) => id.toString() === lessonId.toString()) // object of objs
  // need list of objs
  console.log(lesson)
  const sections = lesson.Section

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
      {renderMetaTags({
        title: lesson.Title,
        description: lesson.Subtitle,
        image: lesson.CoverImage.url,
        url: `https://galacticpolymath.com/lessons/${lessonId}`
      })}
      
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">

        <Header location={location} {...lesson} />

        {lesson.Section &&
          Object.keys(lesson.Section).map((sectionkey, i) => renderSection(lesson.Section.sectionkey, i))}
      </div>

      <NavigationDots sections={lesson.Section} />
    </Fragment>
  );
};

