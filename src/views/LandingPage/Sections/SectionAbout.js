import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const style = {
  ...productStyle,

  descriptor:{
    textAlign:"center",

  },
  classPhoto:{
    margin: "auto"
  }

}

const useStyles=makeStyles(style)

export default function SectionAbout() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <div style={{ color: "black" }}>
              <div>
                <h2 style={{ color: "#6C2D82",marginTop:"10px"}}>Open-Access</h2>
                <h4
                className={classes.descriptor}
                ><em>We do not sell to schools.</em> We believe every student deserves access to free, high-quality learning content.</h4>
              </div>
              <div>
                <h2 style={{ color: "#6C2D82" }}>Straight from the Source</h2>
                <h4
                  className={classes.descriptor}>
                  Our lessons are designed with extensive input from
                  working scientists and other STEM experts, meaning they are current and authentic.
                </h4>
              </div>
              <div>
                <h2 style={{ color: "#6C2D82" }}>High-Quality</h2>
                <h4
                  className={classes.descriptor}>
                  We are a team of educators, scientists, and artists focused on
                  publishing mind-expanding lessons
                  that are also easy to teach.
                </h4>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={7}
          className={classes.classPhoto}>
            <img
              src={
                "https://res.cloudinary.com/galactic-polymath/image/upload/w_1000/v1612979771/assets_marketing/Engineering_Together_1_opqz9h.jpeg"
              }
              height="auto"
              width="100%"
              alt={"Lesson Preview"}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
