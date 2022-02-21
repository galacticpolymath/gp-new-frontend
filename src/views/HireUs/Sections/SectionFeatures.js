import React from "react";
// core components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FeatureDetails from "../../../components/HireUsComponents/FeatureDetails";
// @material-ui icons

import featuresStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <FeatureDetails
        id={"1lesson"}
        keyPhrase1={"1 Lesson"}
        keyPhrase2={"means hundreds of hours of skilled labor."}
        description={
          "Our basic lesson includes standards alignment, presentations, differentiation for grades 5-12, and more. " +
          "On top of that, we will generate all the custom media assets (see below), teacher guides, custom puzzle hooks, " +
          "or data syntheses necessary to create an amazing and easy-to-teach learning experience that mobilizes " +
          "the knowledge you care about."
        }
      />

      <FeatureDetails
        id={"customMedia"}
        keyPhrase1={"Custom Media Assets"}
        keyPhrase2={"are the key components in multimedia storytelling."}
        description={
          "Whether your lesson needs animations, videos with voiceovers, infographics, short podcasts, or " +
          "something else, our team will custom create it. The number of assets per price point depends on the complexity " +
          "of each piece and the needs of the lesson."
        }
      />
      <FeatureDetails
        id={"revisions"}
        keyPhrase1={"Revisions"}
        keyPhrase2={"are how perfection is achieved."}
        description={
          "Whether it’s a typo, a misinterpreted graph, or an activity that’s not turning out as expected, " +
          "Galactic Polymath is committed to creating quality materials and that takes time, effort, and revisions."
        }
      />
      <FeatureDetails
        id={"lessonSupport"}
        keyPhrase1={"Lesson Support"}
        keyPhrase2={"is like tech support for your lessons."}
        description={
          "This means working to improve usability, correct issues, and help teachers. Galactic Polymath is " +
          "here to ensure that the lesson you paid for works perfectly."
        }
      />
      <FeatureDetails
        id={"impactReports"}
        keyPhrase1={"Impact Reports"}
        keyPhrase2={"measure your outreach."}
        description={
          "We take the hard work out of measuring " +
          "the societal impact of your outreach. We monitor lesson site visits, downloads, teacher and student ratings and feedback, and deliver " +
          "reports upon request."
        }
      />
      <FeatureDetails
        id={"openAccess"}
        keyPhrase1={"Open Access"}
        // a bit messy, but I couldn't figure a better way to do this
        keyPhrase2={
          "means you, teachers, and anyone else anywhere in the world can access and use the lessons we create."
        }
        description={
          <span>
            What is more, they are published with the&nbsp;
            <a href={"https://creativecommons.org/licenses/by-nc/2.0/"}>
              CC-BY-NC 2.0 license
            </a>
            &nbsp; and distributed in editable formats so teachers can adapt and
            remix materials to meet their teaching styles and classroom needs.
          </span>
        }
      />
      <FeatureDetails
        id={"betaTesting"}
        keyPhrase1={"Beta Testing"}
        keyPhrase2={"ensures your lesson is ready for the classroom."}
        description={
          "After production, we test your lesson in a variety of G5-12 classrooms, gathering and " +
          "incorporating feedback before we release the lesson publicly. This can give you the confidence that your work " +
          "is being used in high-quality lessons and not simply released to classrooms untested."
        }
      />
      <FeatureDetails
        id={"learningThrough"}
        keyPhrase1={"Learning through Stories"}
        keyPhrase2={"leads to long-term knowledge retention."}
        description={
          <span>
            Research shows that when students learn new material and skills in
            the context of concrete applications and stories, it leads to
            improved engagement, understanding, and learning retention.
            <span>
              <a href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1559-1816.1977.tb00750.x">
                <sup>1,&nbsp;</sup>{" "}
              </a>
              <a href="https://link.springer.com/article/10.3758%2FBF03332778">
                <sup>2,&nbsp;</sup>{" "}
              </a>
              <a href="https://www.researchgate.net/publication/272591393_The_use_of_narrative_to_promote_primary_school_children's_understanding_of_evolution">
                <sup>3,&nbsp;</sup>{" "}
              </a>
              <a href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.991.568&rep=rep1&type=pdf">
                <sup>4</sup>{" "}
              </a>
            </span>
          </span>
        }
      />
      <FeatureDetails
        id={"USnational"}
        keyPhrase1={"US National Standards Alignment"}
        keyPhrase2={
          "means teachers across the country can seamlessly incorporate your lesson into their curriculum."
        }
        description={
          <span>
            Built using
            <a
              href={
                "https://cft.vanderbilt.edu/guides-sub-pages/understanding-by-design/"
              }
            >
              {" "}
              {'"'}Backward Design{'"'}{" "}
            </a>
            best practices, our lessons are aligned with the leading US
            educational standards in all four subjects, and are truly
            interdisciplinary!
            <ul>
              <li>
                <span>
                  ELA –{" "}
                  <a href={"http://www.corestandards.org/ELA-Literacy/"}>
                    Common Core ELA (CC-ELA)
                  </a>
                </span>
              </li>
              <li>
                <span>
                  Math –{" "}
                  <a href={"http://www.corestandards.org/Math/"}>
                    Common Core Math (CC-Math)
                  </a>
                </span>
              </li>
              <li>
                <span>
                  Science –{" "}
                  <a href={"https://www.nextgenscience.org/"}>
                    Next Generation Science Standards (NGSS)
                  </a>
                </span>
              </li>
              <li>
                <span>
                  Social Studies –{" "}
                  <a href={"https://www.socialstudies.org/standards/c3"}>
                    College, Career, and Civic Life Framework (C3)
                  </a>
                </span>
              </li>
            </ul>
          </span>
        }
      />
      <FeatureDetails
        id={"customStandards"}
        keyPhrase1={"Custom Standards Alignment"}
        keyPhrase2={"means connecting to classrooms in your region."}
        description={
          "If you have a target district in mind that doesn’t use the standards we align to, we can work with you to align to any custom set of learning " +
          "targets, standards, or goals."
        }
      />
      <FeatureDetails
        id={"designedFor"}
        keyPhrase1={"Designed for Non-Subject-Expert Teachers"}
        keyPhrase2={
          "means you don’t need a Master’s in biology to teach Galactic Polymath lessons. "
        }
        description={
          "Our aim is for a teacher with no formal training in the particular lesson topic to be able to " +
          "prep each lesson within 15 minutes."
        }
      />
      <FeatureDetails
        id={"GPsensible"}
        keyPhrase1={"GP Cascading Lesson Plans"}
        keyPhrase2={"are built for fast and easy implementation."}
        description={
          "The goal is 15 minutes or less of prep, even for teachers with no training in the lesson topic. We do " +
          "this by designing lessons to be largely student-run and activated, by embedding scaffolding into presentations " +
          "and videos that support student understanding, and by providing quick prep tutorials for teachers that are " +
          "created by people with real classroom experience."
        }
      />
      <FeatureDetails
        id={"customData"}
        keyPhrase1={"Custom Data Analyses"}
        keyPhrase2={"provide new, unforeseen knowledge."}
        description={
          "Our team includes professional scientists and data analysts who can compile new data, conduct new " +
          "analyses, and offer new insights for students to inform and inspire the next generation of leaders. " +
          "Whatever your dream lesson is, we can make it happen."
        }
      />
    </div>
  );
}
