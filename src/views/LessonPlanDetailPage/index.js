import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import cachedLessons from "./data/lesson-plans.json";
import { fetchOne } from "./modules/lessonsApi";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";
import SectionSubscribe from "../LandingPage/Sections/SectionSubscribe";
import GPcopyrightFooter from "../../components/Footer/GPcopyrightFooter";
import Footer from "../../components/Footer/Footer";

import '../../components/LessonDots/Dots.css'
import DotPanel from '../../components/LessonDots/DotPanel';
import Observer from 'react-intersection-observer';

const LessonPlan = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState(
    cachedLessons.find(({ id }) => id.toString() === lessonId.toString())
  );
  
  function handleIntersection (e,entry) {
    const node = entry.target.querySelector('.SectionHeading')
    if (node != null) {
      const id = node.id.replace('&','\\&')
      if (e == true){
        document.querySelectorAll('.navDot').forEach((node)=>node.classList.remove('activeDot'))
        document.querySelector(`.${id}`).classList.add('activeDot')
      }
      if (e == false){
        document.querySelector(`.${id}`).classList.remove('activeDot')
      }
    } 
  }
  
  const options = {
    onChange: handleIntersection,
    root: null,
    rootMargin: '-100px',
  };

  useEffect(() => {
    fetchOne(lessonId, 3000).then(setLesson).catch(console.log);
    
  }, [lessonId])

  let numberedElements = 0;

  if (!lesson) return null;

  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) {
      numberedElements++;
    }
    return <Section key={i} index={numberedElements} section={section} />
  };


  return (
    <Fragment>
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">
        <Header {...lesson} />
          
        {lesson.Section &&
          lesson.Section.map((section, i) => 
            <Observer {...options}>
            {renderSection(section, i)}
            </Observer>
          )
        }
      </div>
      <SectionSubscribe/>
      <DotPanel />

      <Footer content={<GPcopyrightFooter />} />
    </Fragment>

  );
};

export default LessonPlan;
