import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "../../../components/InfoArea/InfoArea";

// import icons
import LockOpen from "@material-ui/icons/LockOpen"
import PlusOne from "@material-ui/icons/PlusOne"
import BlurOn from "@material-ui/icons/BlurOn"
import InsertChartOutlinedOutlined from "@material-ui/icons/InsertChartOutlinedOutlined"

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.valueProps}>
        <GridContainer className={classes.valuePropsGridContainer}>
          <GridItem>
          <h2>Benefits of working with us</h2>
          </GridItem>

          <GridItem>
            <InfoArea className={classes.custInfoArea}
                      title={"Provide Open Access Education"}
                      description={"Help reduce inequality by funding the production of high quality lessons for all."}
                      icon={LockOpen}
                      iconColor={"rose"}
            />
          </GridItem>

          <GridItem>
            <InfoArea className={classes.custInfoArea}
                      title={"Level Up Learning"}
                      description={"Our lessons improve learning and retention by imbuing rigorous, interdisciplinary lessons " +
                      "with artistry, authentic data, and storytelling."}
                      icon={PlusOne}
                      iconColor={"rose"}
            />
          </GridItem>

          <GridItem>
            <InfoArea className={classes.custInfoArea}
                      title={"Expand Your Outreach"}
                      description={"Achieve much broader impacts by reaching classrooms across the United States, with " +
                      "a fraction of the hassle of doing it all on your own."}
                      icon={BlurOn}
                      iconColor={"rose"}
            />
          </GridItem>

          <GridItem>
            <InfoArea className={classes.custInfoArea}
                      title={"Measure Your Impact"}
                      description={"We will aggregate impact reports to showcase the good you are doing in " +
                      "the world for your funders, customers, or the general public."}
                      icon={InsertChartOutlinedOutlined}
                      iconColor={"rose"}
            />
          </GridItem>
          <GridItem className={classes.appeal}>
            <div className={classes.boxContainer}>
            <h3
              style = {{textAlign: "left"}}>{/*could not get this style to work in pricingStyle*/}
              Contracting us means having a fully-dedicated team of scientists, educators, and
              creatives working to achieve your outreach dreams!
            </h3>
            </div>

          </GridItem>


      </GridContainer>
      </div>
  <div className={classes.pricingSection}>

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
                <span className={classes.dollar}>1,500 – 5,000</span>
              </h3>
              <ul>
                <Link to={{hash:"#x"}}/>
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
                Build It!
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card raised pricing color="primary">
            <CardBody pricing>
              <h5 className={classes.cardCategory}>LASTING IMPACT</h5>
              <h3 className={classes.cardTitleWhite}>
                <span className={classes.dollar}>10,000 – 18,000</span>
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
              <Button href="#pablo" color="white" round className={classes.whiteButtonCust}>
                Build It!
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
                  <b>Unlimited </b>Rounds of Revision during Phase I<p> </p>
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
                Build It!
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          *These prices are listed as a rough estimate of costs. Once you reach out, we will discuss your exact needs
          and constraints and provide a more precise estimate which may be higher or lower, depending on the labor entailed.
        </GridItem>
      </GridContainer>
    </div>
    </>
  );
}
