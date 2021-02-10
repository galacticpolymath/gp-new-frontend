import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer> */}
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            {/* <InfoArea
              title="Open Access"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            /> */}
            <div style={{ color: "black", textAlign: "left" }}>
              <div>
                <h2 style={{ color: "#6C2D82" }}>Open-Access</h2>
                <p>We believe in fair and free access for all.</p>
              </div>
              <div>
                <h2 style={{ color: "#6C2D82" }}>Straight from the Source</h2>
                <p>
                  Our lessons are pulling data, content, and knowledge from
                  working scientists, meaning they are as up-to-date as
                  possible.
                </p>
              </div>
              <div>
                <h2 style={{ color: "#6C2D82" }}>High-Quality</h2>
                <p>
                  We are a team of educators and scientists, vigorously
                  developing, curating, testing, and revising every lesson to
                  provide the best possible outcome.
                </p>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
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
