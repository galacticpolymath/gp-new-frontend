import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons

import featuresStyle from "assets/jss/material-kit-pro-react/views/pricingSections/featuresStyle.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

const useStyles = makeStyles(featuresStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
      </div>
      <GridContainer>
        <GridItem md={12} sm={12} className={classes.mlAuto}>
          <Card raised pricing>
            <CardBody pricing>
              <h5
                className="makeStyles-textInfo-83"
              >
                BASIC ADD-ON
              </h5>
              <ul>
                <li>
                  <b><h3><small>$</small>500-750</h3> Simple data interactive</b>
                </li>
                <li>
                  <b><h3><small>$</small>650<small>/finished min</small></h3> Simple video project (e.g. simplevideo assembly, with voiceover)</b>
                </li>
                <li>
                  <b><h3><small>$</small>100-500</h3> Basic infographic or data visual</b>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={12} sm={12} className={classes.mlAuto}>
          <Card raised pricing>
            <CardBody pricing>
              <h5
                className="makeStyles-textInfo-83"
              >
                PREMIUM ADD-ON
              </h5>
              <ul>
                <li>
                  <b><h3><small>$</small>1000- 3000</h3> Complex data interactive/ web app</b>
                </li>
                <li>
                  <b><h3><small>$</small>1000- 2000<small>/finished min</small></h3> Complex video project (new footage,animations, scripting, narration and complex assembly))</b>
                </li>
                <li>
                  <b><h3><small>$</small>600-1000</h3> Complex infographic or data visual</b>
                </li>
              </ul>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
