import React, { Fragment, useEffect } from "react";

import SiteHeader from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import Section from "./Section/index";
import Header from "./Header";
import { NUMBERED_SECTIONS } from "./constants";

import "./style.scss";
import SectionSubscribe from "../LandingPage/Sections/SectionSubscribe";
import GPcopyrightFooter from "../../components/Footer/GPcopyrightFooter";
import Footer from "../../components/Footer/Footer";

import NavigationDots from "./NavigationDots";
import useScrollHandler from './NavigationDots/useScrollHandler'

const LessonPlan = ({ pageContext: { lesson } }) => {
  useScrollHandler()

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
      <SiteHeader
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
      />
      <div className="LessonPlan" id="top">
        <Header {...lesson} />

        {lesson.Section &&
          lesson.Section.map((section, i) => renderSection(section, i))}
      </div>
      <SectionSubscribe />
      <NavigationDots sections={lesson.Section} />

      <Footer content={<GPcopyrightFooter />} />
    </Fragment>
  );
};

export default LessonPlan;
