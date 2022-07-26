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
  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  let { lessonId } = useParams(); // defined and App.js. taken from URL suffix
  lessonId = parseInt(lessonId);

  lessons = require("C:/projects/gp-new-frontend/src/index.json");

  //console.log("LessonDetailsPage", lessons);
  const temp = lessons.find(({ id }) => id === lessonId);
  const [lang, setLang] = useState(temp.DefaultLanguage);
  
  const [lesson, setLesson] = useState(lessons.find(({ id, Language }) => id === lessonId && Language === lang));
  //console.log("lang", lang);
  const [sections, setSections] = useState(lesson.Section);
  const [locale, setLocale] = useState(lesson.locale);
  const availLocales = lessons.filter((l) => l.id === lessonId).map((l)=>l.locale);
  
  let numberedElements = 0;

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
  
  const selectLocale = (localeSelected) => setLang(localeSelected);

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

        <Header location={location} selectedLocale={locale} selectLocale={selectLocale} availLocales={availLocales} {...lesson} />       

        {sections &&
          Object.keys(sections).map((sectionkey, i) => renderSection(sections[sectionkey], i)
          )}
      </div>
      
      <NavigationDots sections={sections} />
    </Fragment>
  );
}

