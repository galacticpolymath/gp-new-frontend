import React from "react";
// nodejs library that concatenates classes

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea";


// import icons
import LockOpen from "@material-ui/icons/LockOpen";
import PlusOne from "@material-ui/icons/PlusOne";
import BlurOn from "@material-ui/icons/BlurOn";
import InsertChartOutlinedOutlined from "@material-ui/icons/InsertChartOutlinedOutlined";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionBenefitsOfGP() {
  const classes = useStyles();
  return (
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


      </GridContainer>
    </div>

  );
}
