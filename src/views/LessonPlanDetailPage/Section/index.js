import React from "react";
import PropTypes from "prop-types";

import { SECTIONS } from "../constants";

import "./style.scss";

import Overview from "./Overview";
import TextBlock from "./TextBlock";
import Heading from "./Heading";
import Procedure from "./Procedure/index";
import TeachingResources from "./TeachingResources/index";
import LearningChart from "./LearningChart";
import Standards from "./Standards/index";
import Acknowledgments from "./Acknowledgments";
import Versions from "./Versions";
import CollapsibleTextSection from "./CollapsibleTextSection";
import Preview from "./Preview";

export const sectionTypeMap = {
  [SECTIONS.OVERVIEW]: Overview,
  [SECTIONS.HEADING]: Heading,
  [SECTIONS.TEXT_BLOCK]: TextBlock,
  [SECTIONS.PROCEDURE]: Procedure,
  [SECTIONS.TEACHING_RESOURCES]: TeachingResources,
  [SECTIONS.LEARNING_CHART]: LearningChart,
  [SECTIONS.STANDARDS]: Standards,
  [SECTIONS.ACKNOWLEDGMENTS]: Acknowledgments,
  [SECTIONS.VERSIONS]: Versions,
  [SECTIONS.COLLAPSIBLE_TEXT]: CollapsibleTextSection,
  [SECTIONS.PREVIEW]: Preview
};

const Section = ({ index, section }) => {
  const Component = sectionTypeMap[section.__component];

  return Component ? (
    <Component className="Section" key={index} index={index} {...section} />
  ) : (
    <div>Invalid section {section.__component}</div>
  );
};

Section.propTypes = {
  index: PropTypes.number,
  section: PropTypes.object,
};

export default Section;
