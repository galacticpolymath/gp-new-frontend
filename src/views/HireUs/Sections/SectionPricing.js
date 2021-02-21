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
import LockOpen from "@material-ui/icons/LockOpen";
import PlusOne from "@material-ui/icons/PlusOne";
import BlurOn from "@material-ui/icons/BlurOn";
import InsertChartOutlinedOutlined from "@material-ui/icons/InsertChartOutlinedOutlined";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/pricingStyle.js";
import PricingFeature from "../../../components/HireUsComponents/PricingFeature";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.valueProps} >
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

      <GridContainer id={"priceList"}>
        <GridItem md={4} sm={4}>
          <Card plain pricing>
            <CardBody pricing>
              <h5
                className={classNames(classes.cardCategory, classes.textInfo)}
              >
                BASIC TRANSLATION
              </h5>

              <h3 className={classes.cardTitle}>
                <span className={classes.dollar}>1,500&nbsp;– 5,000</span>
              </h3>
              <ul>
                <PricingFeature
                boldedLabel={"1"}
                description={"Lesson"}
                linkTarget={"#1lesson"}
                />
                <PricingFeature
                  boldedLabel={"1-3"}
                  description={"Custom Media Assets"}
                  linkTarget={"#customMedia"}
                />
                <PricingFeature
                  boldedLabel={"up to 3"}
                  description={"Rounds of Revision"}
                  linkTarget={"#revisions"}
                />
                <PricingFeature
                  boldedLabel={"✘"}
                  description={"Lesson Support"}
                  linkTarget={"#lessonSupport"}
                />
                <PricingFeature
                  boldedLabel={"✘"}
                  description={"Impact Reports"}
                  linkTarget={"#impactReports"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Published Open Access For All"}
                  linkTarget={"#openAccess"}
                />
                <PricingFeature
                  boldedLabel={"✘"}
                  description={"Beta Testing"}
                  linkTarget={"#betaTesting"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Creative, Story-Based Lesson Design"}
                  linkTarget={"#learningThrough"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Alignment to US National Standards in 4 Subjects"}
                  linkTarget={"#USnational"}
                />
                <PricingFeature
                  boldedLabel={"✘"}
                  description={"Custom Standards Alignment"}
                  linkTarget={"#customStandards"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Designed for Non-Subject-Expert Teachers"}
                  linkTarget={"#designedFor"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"GP Sensible Lesson Plan"}
                  linkTarget={"#GPsensible"}
                />
                <PricingFeature
                  boldedLabel={"✘"}
                  description={"Custom Data Analysis"}
                  linkTarget={"#customData"}
                />
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
                <span className={classes.dollar}>10,000&nbsp;– 18,000</span>
              </h3>
              <ul>
                <PricingFeature
                  boldedLabel={"4"}
                  description={"Lesson Unit"}
                  linkTarget={"#1lesson"}
                />
                <PricingFeature
                  boldedLabel={"6–10"}
                  description={"Custom Media Assets"}
                  linkTarget={"#customMedia"}
                />
                <PricingFeature
                  boldedLabel={"up to 10"}
                  description={"Rounds of Revision"}
                  linkTarget={"#revisions"}
                />
                <PricingFeature
                  boldedLabel={"3 Years"}
                  description={"Lesson Support"}
                  linkTarget={"#lessonSupport"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Impact Reports"}
                  linkTarget={"#impactReports"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Published Open Access for All"}
                  linkTarget={"#openAccess"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Beta Testing"}
                  linkTarget={"#betaTesting"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Creative, Story-Based Lesson Design"}
                  linkTarget={"#learningThrough"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Alignment to US National Standards in 4 Subjects"}
                  linkTarget={"#USnational"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Custom Standards Alignment"}
                  linkTarget={"#customStandards"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Designed for Non-Subject-Expert Teachers"}
                  linkTarget={"#designedFor"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"GP Sensible Lesson Plan"}
                  linkTarget={"#GPsensible"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Custom Data Analysis"}
                  linkTarget={"#customData"}
                />
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
                <PricingFeature
                  boldedLabel={"All Lessons Needed"}
                  description={""}
                  linkTarget={"#1lesson"}
                />
                <PricingFeature
                  boldedLabel={"All Media Assets Needed"}
                  description={""}
                  linkTarget={"#customMedia"}
                />
                <PricingFeature
                  boldedLabel={"Unlimited"}
                  description={"Rounds of Revision"}
                  linkTarget={"#revisions"}
                />
                <PricingFeature
                  boldedLabel={"Lifetime"}
                  description={"Lesson Support"}
                  linkTarget={"#lessonSupport"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Impact Reports"}
                  linkTarget={"#impactReports"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Published Open Access For All"}
                  linkTarget={"#openAccess"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Beta Testing"}
                  linkTarget={"#betaTesting"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Creative, Story-Based Lesson Design"}
                  linkTarget={"#learningThrough"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Alignment to US National Standards in 4 Subjects"}
                  linkTarget={"#USnational"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Custom Standards Alignment"}
                  linkTarget={"#customStandards"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Designed for Non-Subject-Expert Teachers"}
                  linkTarget={"#designedFor"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"GP Sensible Lesson Plan"}
                  linkTarget={"#GPsensible"}
                />
                <PricingFeature
                  boldedLabel={"✔"}
                  description={"Custom Data Analysis"}
                  linkTarget={"#customData"}
                />
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
