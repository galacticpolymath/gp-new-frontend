import React from "react";
// nodejs library that concatenates classes
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
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
      <div className={classes.sectionLabel}
           style={{ paddingTop: "0" }}
      >
        <h3>STEM Advocacy Institute</h3>
        <h4>The amazing organizations we work with to generate high quality multimedia, develop new education tools,
          and improve access to STEM careers for underserved communities.</h4>
      </div>
      <GridContainer className={classes.justifyContent}>

        {/*SAI*/}
        <GridItem xs={12} sm={6} md={4}>
          <Card pricing plain>
            <CardAvatar profileSq plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1597115866/Partners/SAiLogo_ikbcl5.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
                style={{padding: "0 1rem"}}
              />
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
            <CardFooter className={classes.justifyContent}>
              <Button
                href="https://stemadvocacy.org/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fas fa-globe" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/*SAI*/}
        <GridItem xs={12} sm={6} md={4}>
          <Card pricing plain>
            <CardAvatar profileSq plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,w_300,h_300/v1597114912/Partners/phutureDoctorsLogo_eylt5h.png"
                )}
                alt="profile-pic"
                className={classes.img}
                style={{padding: "6% 10% 6% 8%"}}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                PhutureDoctors
              </h4>
              <h6 className={classes.textMuted}>
                Collaborator
              </h6>
              <p className={classes.cardDescription}>
                Phuture Doctors and Galactic Polymath are both committed to amplifying diverse voices in STEM and nurturing
                curiosity and critical thinking in everyone.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="https://phuturedoctors.com/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fas fa-globe" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  )
    ;
}
