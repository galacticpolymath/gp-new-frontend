import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons


import addOnsStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/featuresStyle.js"


const useStyles = makeStyles(addOnsStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <div className={classes.textCenter}>
      </div>
      <GridContainer
        style={{gridAutoRows: "1fr",  gridColumnGap: "0",display: "flexContainer"}}
      >
        <GridItem md={6} sm={6} style={{display: "grid"}}>


        </GridItem>
        <GridItem md={6} sm={6} style={{display: "grid"}}>

        </GridItem>

      </GridContainer>
    </div>
  );
}
