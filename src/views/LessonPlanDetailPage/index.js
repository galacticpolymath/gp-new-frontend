import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { renderMetaTags } from "utils/meta";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import cachedLessons from "./data/lesson-plans.json";

import Section from "./Section/index";
import Header from "./Header";
import SmartSearch from './SmartSearch'
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'
import { SearchProvider } from "./SmartSearch/SearchContext";

const LessonPlan = ({ location }) => {
  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  
  const { lessonId } = useParams();
  const lesson = cachedLessons.find(({ id }) => id.toString() === lessonId.toString())

  if (!lesson) return null;

  let numberedElements = 0;
  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) {
      numberedElements++;
    }
    return <Section 
      key={i} 
      index={numberedElements} 
      section={section}
    />;
  };

  return (
    <SearchProvider>
      {renderMetaTags({
        title: lesson.Title,
        description: lesson.Subtitle,
        image: lesson.CoverImage.url,
        url: `https://galacticpolymath.com/lessons/${lessonId}`
      })}

      <SmartSearch />
      
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
    </SearchProvider>
  );
};

export default LessonPlan;
