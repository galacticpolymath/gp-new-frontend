import React, { Fragment, useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { renderMetaTags } from "utils/meta";
import hotkeys from 'hotkeys-js';

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

const LessonPlan = ({ location }) => {
  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  
  const { lessonId } = useParams();
  const lesson = cachedLessons.find(({ id }) => id.toString() === lessonId.toString())

  /**
   * Custom search
   */
  hotkeys('ctrl+f,cmd+f', (e) => {
    e.preventDefault() 
    setIsSearchVisible(true)
  });
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  useEffect(() => {
    setIsSearchVisible(false)
  }, [searchTerm])
  /**
   * End custom search
   */

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
      searchTerm={searchTerm}
    />;
  };

  return (
    <Fragment>
      {renderMetaTags({
        title: lesson.Title,
        description: lesson.Subtitle,
        image: lesson.CoverImage.url,
        url: `https://galacticpolymath.com/lessons/${lessonId}`
      })}

      <SmartSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isVisible={isSearchVisible}
        setIsVisible={setIsSearchVisible}
      />
      
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
