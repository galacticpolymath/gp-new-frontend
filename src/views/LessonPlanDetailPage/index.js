import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { renderMetaTags } from "utils/meta";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'
import { isConstructorDeclaration } from "typescript";

export default function LessonPlan({ location, lessons }) {

  let { lessonId } = useParams(); // defined and App.js. taken from URL suffix
  lessonId = parseInt(lessonId);

  const temp = lessons.find(({id}) => parseInt(id) === lessonId);
  const [loc, setLocale] = useState(temp.DefaultLocale);
  const [lesson, setLesson] = useState(lessons.find(({ id, locale }) => parseInt(id) === lessonId && locale === loc))
  const availLocales = lessons.filter((l) => parseInt(l.id) === lessonId).map((l)=>l.locale);

  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  useEffect(() => {
    if (loc) {console.log("Locale change", loc);
    setLesson(lessons.find(({ id, locale }) => parseInt(id) === lessonId && locale === loc));
    //if (lesson) console.log("Lesson", lesson, "locale", loc, "avail", availLocales);
  }}, [loc]);

  let numberedElements = 0;

  // count the sections listed in numbered_sections. to send as index. 
  // function takes a section object with flat properties
  // returns a section component to render
  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) {
      numberedElements++;
    }

    return <Section key={i} index={numberedElements} section={section} />;
  };
  
  const selectLocale = (localeSelected) => setLocale(localeSelected);
  
  return (
    <Fragment>
      {renderMetaTags({
        title: lesson.Title,
        description: lesson.Subtitle,
        image: lesson.CoverImage.url,
        url: `https://localhost:3000/lessons/${lessonId}`
      })}

      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">

        <Header location={location} selectedLocale={loc} selectLocale={selectLocale} availLocales={availLocales} {...lesson} />

        {lesson.Section &&
          Object.keys(lesson.Section).map((sectionkey, i) => renderSection(lesson.Section[sectionkey], i)
    )}
      </div>
      
      <NavigationDots sections={lesson.Section} />
    </Fragment>
  );
}

