import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.pricingSection}>
      <h4>
        By working with our team, we can translate your area of focus into open-access
        lessons that inspire and engage students, while also making it easy for teachers to connect
        abstract learning standards to real world problems involving diverse STEM professionals. Forget
        the textbook lessons you were taught in school. Each of our lessons is carefully crafted over
        weeks, imbued with creativity, artistry, authentic data, and storytelling. Let us do the heavy lifting
        to achieve your outreach goals. <em>Together we can democratize current knowledge for all,</em> and forever change the education status quo!
        </h4>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h5
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                BASIC TRANSLATION
              </h5>

              <h3 className={classes.cardTitle}>
                <small>$</small>1,500- 5000
              </h3>
              <ul>
                <li>
                  <b>1</b> Lesson
                </li>
                <li>
                  <b>1-3</b> Custom Media Assets
                </li>
                <li>
                  <b>up to 3</b> Rounds of Revision <p>During Phase I</p>
                </li>
                <li>
                  <b>X</b> Lesson Support
                </li>
                <li>
                  <b>X</b> Impact Reports
                </li>
                <li>
                  <b>✓</b> Published Open Access For All
                </li>
                <li>
                  <b>X</b> Beta testing before <p>publication</p>
                </li>
                <li>
                  <b>✓</b> Creative, story-based <p>lesson design</p>
                </li>
                <li>
                  <b>✓</b> Alignment to US National <p>standards in all subjects</p>
                </li>
                <li>
                  <b>X</b> Custom standards <p>alignment</p>
                </li>
                <li>
                  <b>✓</b> Non-subject-expert <p>Teacher Supported</p>
                </li>
                <li>
                  <b>✓</b> GP Sensible Lesson Plan
                </li>
                <li>
                  <b>X</b>  Custom data analysis or <p>synthesis</p>
                </li>
              </ul>
              <Button href="#pablo" color="primary" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="primary">
            <CardBody pricing>
              <h5 className={classes.cardCategory}>LASTING IMPACT</h5>
              <h3 className={classes.cardTitleWhite}>
                <small>$</small>10,000- 18,000
              </h3>
              <ul>
                <li>
                  <b>4</b> Lesson Unit
                </li>
                <li>
                  <b>6-10</b> Custom Media Assets
                </li>
                <li>
                  <b>up to 10</b> Rounds of Revision <p>During Phase I</p>
                </li>
                <li>
                  <b>3 Years</b> Lesson Support
                </li>
                <li>
                  <b>✓</b> Impact Reports
                </li>
                <li>
                  <b>✓</b> Published Open Access For All
                </li>
                <li>
                  <b>✓</b> Beta testing before <p>publication</p>
                </li>
                <li>
                  <b>✓</b> Creative, story-based <p>lesson design</p>
                </li>
                <li>
                  <b>✓</b> Alignment to US National <p>standards in all subjects</p>
                </li>
                <li>
                  <b>✓</b> Custom standards <p>alignment</p>
                </li>
                <li>
                  <b>✓</b> Non-subject-expert <p>Teacher Supported</p>
                </li>
                <li>
                  <b>✓</b> GP Sensible Lesson Plan
                </li>
                <li>
                  <b>✓</b>  Custom data analysis or <p>synthesis</p>
                </li>
              </ul>
              <Button href="#pablo" color="white" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h5
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                WORLD CHANGER
              </h5>
              <h3 className={classes.cardTitle}>
                Let{"’"}s Talk
              </h3>
              <ul>
                <li>
                  <b>All Lessons Needed</b>
                </li>
                <li>
                  <b>All Media Assets</b>
                </li>
                <li>
                  {/* find cleaner fix for multiple line breaks */}
                  <b>Unlimited </b>Rounds of Revision during Phase I<p></p>
                </li>
                <li>
                  <b>Lifetime</b> Lesson Support
                </li>
                <li>
                  <b>✓</b> Impact Reports
                </li>
                <li>
                  <b>✓</b> Published Open Access For All
                </li>
                <li>
                  <b>✓</b> Beta testing before <p>publication</p>
                </li>
                <li>
                  <b>✓</b> Creative, story-based <p>lesson design</p>
                </li>
                <li>
                  <b>✓</b> Alignment to US National <p>standards in all subjects</p>
                </li>
                <li>
                  <b>✓</b> Custom standards <p>alignment</p>
                </li>
                <li>
                  <b>✓</b> Non-subject-expert <p>Teacher Supported</p>
                </li>
                <li>
                  <b>✓</b> GP Sensible Lesson Plan
                </li>
                <li>
                  <b>✓</b>  Custom data analysis or <p>synthesis</p>
                </li>
              </ul>
              <Button href="#pablo" color="primary" round>
                Get started
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
