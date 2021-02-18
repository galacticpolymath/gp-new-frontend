import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";
import Warning from "../../../components/Typography/Warning";
import Primary from "../../../components/Typography/Primary";
import { makeCloudinaryUrl } from "../../../components/shared/constants";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer
        // className={classes.missionContainer}
      >
        <GridItem
          xs={12}
          sm={4}
          med={3}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textLeft)}
        >
          {/*Note warning just changes to the warning color--atomic blue*/}
          <Warning><h2>Our Mission</h2></Warning>
        </GridItem>
        <GridItem
          xs={12}
          sm={8}
          med={9}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto)}
        >
          <h4
          className={classes.textLeft}>
            To create a direct pipeline between scientists and G5-12 classrooms by translating complex topics from
            researchers, non-profits, and sustainable corporations, into high-quality, open-access educational
            materials.</h4>
        </GridItem>
      </GridContainer>


      {/*Now, Knowledge Splosion infographic and Vision statement*/}


      <GridContainer className={classes.aboutDescription}>
        <GridItem
          xs={12}
          sm={12}
          med={7}
          lg={7}
        >
          <img src={makeCloudinaryUrl("/v1613514579/assets_marketing/GP_Current_Knowledge_Splosion_rjbh11.jpg")}
          alt={"Diagram showing how the status quo for disseminating knowledge favors experts or the highly educated," +
          "neglecting K-12 students who are a much larger, more important audience representing all of society at a " +
          "critical developmental stage. By connecting Academia and K-12 classes, we can create a much more informed," +
          "engaged, and curious populace that is ready to address the challenges of tomorrow."}
               className={classes.img}
          />
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          med={5}
          lg={5}
          className={classes.textLeft}
        >
          <Primary><h2>Our Vision</h2></Primary>
          <h4>Our company was not founded just to make a big profit. We were founded
            to improve the lives of teachers, students, and researchers–because we have been in all
            of those roles. We envision a future where education is bolder, more creative, more equitable,
            and where organizational outreach truly has Broader Impacts.
           </h4>
        </GridItem>
        <GridItem
          xs={12}
          sm={12}
          med={12}
          className={classNames(classes.thinkBigger,classes.mlAuto,classes.mrAuto)}
        >
          <Warning><h1>
            <span style={{whiteSpace:"nowrap",paddingRight:"15%"}}>Think <b>bigger</b>.</span>
            <span style={{whiteSpace:"nowrap",paddingLeft:"15%"}}>Learn everything.</span>
            </h1></Warning>
        </GridItem>
      </GridContainer>
    </div>
  );
}
