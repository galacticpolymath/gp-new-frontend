import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons


import addOnsStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/addOnsStyle.js"

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button";

const useStyles = makeStyles(addOnsStyle);

export default function SectionAddOns() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
      </div>
      <GridContainer
        style={{gridAutoRows: "1fr",  gridColumnGap: "0",display: "flexContainer"}}
      >
        <GridItem md={6} sm={6} style={{display: "grid"}}>
          <Card raised pricing>
            <CardBody pricing>
              <h5
                className="makeStyles-textInfo-83"
              >
                BASIC ADD-ON
              </h5>
              <ul>
                <li>
                  <b><h3><span className={classes.dollar}>500 – 750</span></h3> Simple data interactive</b>
                </li>
                <li>
                  <b><h3><span className={classes.dollar}>650 </span>
                    <small>per&nbsp;finished&nbsp;min</small></h3> Simple video project (e.g. simple video assembly, with voiceover)</b>
                </li>
                <li>
                  <b><h3><span className={classes.dollar}>100 – 500</span></h3> Basic infographic or data visual</b>
                </li>
              </ul>
              <Button href="#pablo" color="primary" round style={{ alignSelf: "end" }}>
                Build It!
              </Button>
            </CardBody>
          </Card>

        </GridItem>
        <GridItem md={6} sm={6} style={{display: "grid"}}>
          <Card raised pricing color={"primary"} className={classes.premiumAddOn}>
            <CardBody pricing>
              <h5
                className="makeStyles-textInfo-83"
              >
                PREMIUM ADD-ON
              </h5>
              <ul>
                <li>
                  <h3 className={classes.cardTitleWhite}><span className={classes.dollar}>1000 – 3000</span></h3> Complex data interactive or web app
                </li>
                <li>
                  <h3 className={classes.cardTitleWhite}><span className={classes.dollar}>1000 – 2000
                    <small> per&nbsp;finished&nbsp;min</small></span></h3> Complex video project
                  (new footage, animations, scripting, narration or complex assembly)
                </li>
                <li>
                  <h3 className={classes.cardTitleWhite}><span className={classes.dollar}>600 – 1000</span></h3> Complex infographic or data visual
                </li>
              </ul>
              <Button href="#pablo" color="white" round className={classes.whiteButtonCust}>
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
  );
}
