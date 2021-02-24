import React from "react";
// nodejs library that concatenates classes
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

import { makeCloudinaryUrl } from "components/shared/constants";


const useStyles = makeStyles(teamStyle);

export default function SectionPartners() {
  const classes = useStyles();
  return (
    <div className={classes.partners}>

      {/*SciComm Alliance Partners*/}
      <div className={classes.sectionLabel}>
        <h3>PARTNERS</h3>
        <h4>The amazing organizations we work with to generate high quality multimedia, develop new education tools,
          and improve access to STEM careers for underserved communities.</h4>
      </div>
      <GridContainer className={classes.justifyContent}>

        {/*SAI*/}
        <GridItem xs={12} sm={6} md={4}>
          <Card pricing plain>

            <CardAvatar profileSq>
              <a href={"https://stemadvocacy.org/"}>
                <img
                  src={makeCloudinaryUrl(
                    "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1597115866/Partners/SAiLogo_ikbcl5.jpg"
                  )}
                  alt="profile-pic"
                  className={classes.logo}
                  style={{ padding: "0 1rem" }}
                />
              </a>
            </CardAvatar>

            <CardBody plain>
              <h4 className={classes.cardTitle}>
                STEM Advocacy Institute
              </h4>
              <h6 className={classes.textMuted}>
                Nonprofit Partner
              </h6>
              <p className={classes.cardDescription}>
                As an SAI Affiliate, we are working together to tell the stories of scientists and STEM professionals,
                and connect with underserved audiences.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        {/*PhutureDoctors*/}
        <GridItem xs={12} sm={6} md={4}>
          <Card pricing plain>
            <CardAvatar profileSq>
              <a href={"https://phuturedoctors.com/"}>
                <img
                  src={makeCloudinaryUrl(
                    "q_auto:best,f_auto,w_300,h_300/v1597114912/Partners/phutureDoctorsLogo_eylt5h.png"
                  )}
                  alt="profile-pic"
                  className={classes.img}
                  style={{ padding: "6% 10% 6% 8%" }}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                PhutureDoctors
              </h4>
              <h6 className={classes.textMuted}>
                Collaborator
              </h6>
              <p className={classes.cardDescription}>
                Phuture Doctors and Galactic Polymath are both committed to amplifying diverse voices in STEM and
                nurturing
                curiosity and critical thinking in everyone.
              </p>
            </CardBody>
          </Card>
        </GridItem>

        {/*OneZoom*/}
        <GridItem xs={12} sm={6} md={4}>
          <Card pricing plain>
            <CardAvatar profileSq>
              <a href={"https://phuturedoctors.com/"}>
                <img
                  src={makeCloudinaryUrl(
                    "q_auto:best,f_auto,w_300/v1597116048/Partners/onezoom_fkx7s8.jpg"
                  )}
                  alt="profile-pic"
                  className={classes.img}
                  style={{ padding: "6% 10% 6% 8%" }}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                OneZoom
              </h4>
              <h6 className={classes.textMuted}>
                Nonprofit Partner
              </h6>
              <p className={classes.cardDescription}>
                This UK-based nonprofit offers a tool for exploring the evolutionary connections between over 2 million
                species using a Google Earth-like interface! We are working to make this incredible tool accessible
                for young students and incorporating it into our biology lessons.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
    ;
}
