import React from "react";
import PropTypes from "prop-types";

import { SECTIONS } from "../constants";

import "./style.scss";

import Overview from "./Overview";
import Media from "./Media";
import TextBlock from "./TextBlock";
import Heading from "./Heading";
import Procedure from "./Procedure/index";
import TeachingResources from "./TeachingResources/index";
import SteamBadge from "./SteamBadge";
import Standards from "./Standards/index";
import Acknowledgments from "./Acknowledgments";
import Versions from "./Versions";
import CollapsibleTextSection from "./CollapsibleTextSection";

export const sectionTypeMap = {
  [SECTIONS.OVERVIEW]: Overview,
  [SECTIONS.MEDIA]: Media,
  [SECTIONS.HEADING]: Heading,
  [SECTIONS.TEXT_BLOCK]: TextBlock,
  [SECTIONS.PROCEDURE]: Procedure,
  [SECTIONS.TEACHING_RESOURCES]: TeachingResources,
  [SECTIONS.STEAM_BADGE]: SteamBadge,
  [SECTIONS.STANDARDS]: Standards,
  [SECTIONS.ACKNOWLEDGMENTS]: Acknowledgments,
  [SECTIONS.VERSIONS]: Versions,
  [SECTIONS.COLLAPSIBLE_TEXT]: CollapsibleTextSection,
};

const Section = ({ index, section, searchTerm }) => {
  const Component = sectionTypeMap[section.__component];

  return Component ? (
    <Component className="Section" key={index} index={index} searchTerm={searchTerm} {...section} />
  ) : (
    <div>Invalid section {section.__component}</div>
  );
};

Section.propTypes = {
  index: PropTypes.number,
  section: PropTypes.object,
};

export default Section;
