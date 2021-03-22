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

import pricingStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/pricingStyle.js";
import PricingFeature from "../../../components/HireUsComponents/PricingFeature";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <>
  <div className={classes.pricingSection}>

      <GridContainer id={"priceList"}>
        <GridItem md={4} sm={12}>
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
                  description={"Published Open Access"}
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
              <Button href="https://portal.galacticpolymath.com/public/form/view/604d904c80fecb0cd51e2529" color="primary" round>
                Build It!
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={12}>
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
                  description={"Published Open Access"}
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
              <Button href="https://portal.galacticpolymath.com/public/form/view/604d904c80fecb0cd51e2529" color="white" round className={classes.whiteButtonCust}>
                Build It!
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem md={4} sm={12}>
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
                  boldedLabel={"All"}
                  description={" Lessons Needed"}
                  linkTarget={"#1lesson"}
                />
                <PricingFeature
                  boldedLabel={"All"}
                  description={"Custom Assets Needed"}
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
                  description={"Published Open Access"}
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
              <Button href="https://portal.galacticpolymath.com/public/form/view/604d904c80fecb0cd51e2529" color="primary" round>
                Build It!
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          *These prices are a rough estimate of costs. Once you reach out, we will discuss your exact needs
          and constraints and provide a more precise estimate which may be higher or lower, depending on the labor entailed.
        </GridItem>
      </GridContainer>
    </div>
    </>
  );
}
