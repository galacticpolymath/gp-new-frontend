import React from "react";
// core components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FeatureDetails from "../../../components/HireUsComponents/FeatureDetails";
// @material-ui icons


import addOnsStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/featuresStyle.js";


const useStyles = makeStyles(addOnsStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <FeatureDetails
        id={"x"}
        keyPhrase1={"1 Lesson"}
        keyPhrase2={"means hundreds of hours of skilled labor."}
        description={"Our basic lesson includes standards alignment, presentations, differentiation, and more. " +
        "On top of that, we will generate all the custom media assets (see below), teacher guides, custom puzzle hooks," +
        "or data syntheses necessary to create an amazing and easy-to-teach learning experience that mobilizes" +
        "the knowledge you care about."}
      />

      <FeatureDetails
        keyPhrase1={"Custom Media Assets"}
        keyPhrase2={"are the key components in multimedia storytelling."}
        description={"Whether your lesson needs animations, videos with voiceovers, infographics, short podcasts, or " +
        "something else, our team will custom create it. The number of assets per price point depends on the complexity " +
        "of each piece and the needs of the lesson. "}

      />
      <FeatureDetails
        keyPhrase1={"Revisions"}
        keyPhrase2={"are how perfection is achieved."}
        description={"Whether it’s a typo, a misinterpreted graph, or an activity that’s not turning out as expected, " +
        "Galactic Polymath is committed to creating quality materials and quality materials require time, effort, and revisions. "}
      />
      <FeatureDetails
        keyPhrase1={"Lesson Support,"}
        keyPhrase2={"like tech support for your lessons."}
        description={"This means working to improve usability, correct issues, and help teachers. Galactic Polymath is " +
        "here to ensure that the lesson you paid for works perfectly. "}
      />
      <FeatureDetails
        keyPhrase1={"Impact Reports"}
        keyPhrase2={"to measure your outreach."}
        description={"Often necessary for grant proposals or public campaigns, we take the hard work out of measuring " +
        "your outreach. We monitor lesson site visits, downloads, teacher and student ratings and feedback, and deliver " +
        "reports upon request. "}
      />
      <FeatureDetails
        keyPhrase1={"Beta Testing"}
        keyPhrase2={"ensures your lesson is ready for the classroom."}
        description={"After production, we test your lesson in a variety of G5-12 classrooms, gathering and " +
        "incorporating feedback before we release the lesson publicly. This can give you the confidence that your work " +
        "is being used in high-quality lessons and not simply released to classrooms untested."}
      />
      <FeatureDetails
        keyPhrase1={"Learning through Stories"}
        keyPhrase2={"leads to long-term knowledge retention."}
        description={"Science has shown that when students learn new material and skills in the context of stories, it " +
        "leads to better retention and understanding. "}
      />
      <FeatureDetails
        keyPhrase1={"US National Standards Alignment"}
        keyPhrase2={"easy implementation for teachers across the nation."}
        description={"Built with Understanding by Design, our lessons are aligned with the leading US educational " +
        "standards—Next Generation Science Standards, Common Core Math and ELA, and the College, Career, and Civic Life " +
        "Social Studies Framework. This alignment means that regardless of the district, our lessons will fit the curriculum. "}
      />
      <FeatureDetails
        keyPhrase1={"Custom Standards Alignment"}
        keyPhrase2={"means a more specific focus, catered directly to your region."}
        description={"If you have a target district in mind that doesn’t use the standards we align to, or a target " +
        "audience that is not restricted by standards, we can work with you to align to any custom set of learning " +
        "targets, standards, or goals. "}
      />
      <FeatureDetails
        keyPhrase1={"Designed for Non-Subject Expert Teachers"}
        keyPhrase2={"means you don’t need a Master’s in biology to feel prepared to teach Galactic Polymath lessons. "}
        description={"Our aim is for a teacher with no formal training in the particular lesson topic to be able to " +
        "prep each lesson within 15 minutes. "}
      />
      <FeatureDetails
        keyPhrase1={"GP Sensible Lesson Plans"}
        keyPhrase2={"are built for fast and easy implementation."}
        description={"As we said, the goal is 15 minutes or less of prep even for non-subject area teachers. We do " +
        "this by designing lessons to be largely student-run and activated, by embedding scaffolding into presentations " +
        "and videos that support student understanding, and by providing quick prep tutorials for teachers that are " +
        "prepared by people with real classroom experience. "}
      />
      <FeatureDetails
        keyPhrase1={"Custom Data Analyses"}
        keyPhrase2={"provide new, unforeseen knowledge."}
        description={"Our team includes professional scientists and data analysts who can compile new data, conduct new " +
        "analyses, and offer new, direct access to information in classrooms to inform the next generation of leaders. " +
        "Whatever your dream lesson is, we can make it happen. "}
        />
    </div>
  );
}
