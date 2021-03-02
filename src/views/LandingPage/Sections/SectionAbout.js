import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionAbout() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={5}>
            <div style={{ color: "black" }}>
              <div>
                <h2 style={{ color: "#6C2D82" }}>Open-Access</h2>
                <h4>We believe in fair and free educational access for all.</h4>
              </div>
              <div>
                <h2 style={{ color: "#6C2D82" }}>Straight from the Source</h2>
                <h4>
                  Our lessons are designed with extensive input from
                  working scientists and other STEM experts, meaning they are as up-to-date as
                  possible.
                </h4>
              </div>
              <div>
                <h2 style={{ color: "#6C2D82" }}>High-Quality</h2>
                <h4>
                  We are a team of educators and scientists, vigorously
                  developing, curating, testing, and revising every lesson to
                  provide the best possible outcome.
                </h4>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <img
              src={
                "https://res.cloudinary.com/galactic-polymath/image/upload/v1612979771/assets_marketing/Engineering_Together_1_opqz9h.png"
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
