import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { renderMetaTags } from "utils/meta";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

//import cachedLessons from "./data/lesson-plans.json";
//import lessons from "./data/lessons.json";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'

export default function LessonPlan({ location, lessons }) {
  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const { lessonId } = useParams();
  const lesson = lessons.find(({ id }) => id.toString() === lessonId.toString()) // object of objs
  // need list of objs
  
  const sections = lesson.Section;

  let numberedElements = 0;

  if (!lesson) return null;

  // count the sections listed in numbered_sections. to send as index. 
  // function takes a section object with flat properties
  // returns a section component to render
  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) { 
      numberedElements++;
    }
    // console.log(numberedElements, section);
    
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

        {sections &&
          Object.keys(sections).map((sectionkey, i) => renderSection(sections[sectionkey], i)
        )}
      </div>

      <NavigationDots sections={lesson.Section} />
    </Fragment>
  );
};

