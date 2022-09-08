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
import { useCookies } from 'react-cookie';

export default function LessonPlan({ location, lessons }) {

  let { lessonId } = useParams(); // defined and App.js. taken from URL suffix
  lessonId = parseInt(lessonId);

  const [cookies, setCookie] = useCookies();
  //const [locale, setLocale] = useState(cookies[lessonId]);

  const setLoc = (loc) => {
    //setLocale(loc);
    setCookie(lessonId, loc, { path: '/' });
  }

  const temp = lessons.find(({id}) => parseInt(id) === lessonId);
  const availLocales = lessons.filter((l) => parseInt(l.id) === lessonId).map((l)=>l.locale);
  let defaultLoc = temp.DefaultLocale;
  if (!(lessonId in cookies)) {
    setLoc(defaultLoc);
    console.log(`setting first time cookie and locale: ${defaultLoc}`);
  } else {
    defaultLoc = cookies[lessonId];
  }

  const [lesson, setLesson] = useState(lessons.find(({ id, locale }) => parseInt(id) === lessonId && locale === defaultLoc));
  

  useScrollHandler()

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  useEffect(() => {
    if (lessonId in cookies) {
      setLesson(lessons.find(({ id, locale }) => parseInt(id) === lessonId && locale === cookies[lessonId]));
      //if (lesson) console.log("Lesson", lesson, "locale", loc, "avail", availLocales);
    }
  }, [cookies[lessonId]]);

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
  
  return (
    lesson ?
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

          <Header location={location} selectedLocale={defaultLoc} availLocales={availLocales} setLoc={setLoc} {...lesson} />

          {lesson.Section &&
            Object.keys(lesson.Section).map((sectionkey, i) => renderSection(lesson.Section[sectionkey], i)
      )}
        </div>
        
        <NavigationDots sections={lesson.Section} />
      </Fragment> :
      <div />
  );
}

