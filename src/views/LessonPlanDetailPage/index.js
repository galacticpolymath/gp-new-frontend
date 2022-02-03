import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { renderMetaTags } from "utils/meta";
import axios from 'axios';

import less from "./data/index.json"

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'

const LessonPlan = ({ location }) => {
  useScrollHandler()

  /*
  const [less, setLessons] = useState([])

  useEffect(() => {
    fetch(`https://catalog.galacticpolymath.com/index.json`)
      .then(res => res.json())
      .then(result => setLessons(result))
    
  }, []);
  */

  const { lessonId } = useParams();
  const les = less.find(({ id }) => id.toString() === lessonId.toString());

  let numberedElements = 0;

  if (!les) return null;

  const renderSection = (section, i) => {
    if (NUMBERED_SECTIONS.indexOf(section.__component) !== -1) {
      numberedElements++;
    }
    console.log(section)
    return <Section key={i} index={numberedElements} section={section} />;
  };

  if (true) {
  return (
    <Fragment>
      {renderMetaTags({
        title: les.Title,
        description: les.Subtitle,
        image: les.CoverImage.url,
        url: `https://galacticpolymath.com/lessons/${lessonId}`
      })}
      
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">

        <Header location={location} {...les} />

        {les.Section &&
          Object.keys(les.Section).map((key, i) => renderSection(les.Section[key], i))}
      </div>

      <NavigationDots sections={les.Section} />
    </Fragment>
  );
  };
};

export default LessonPlan;
