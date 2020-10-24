import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
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

import FaceMarc from "assets/img/faces/marc.jpg";
import FaceChristian from "assets/img/faces/christian.jpg";
import FaceKendall from "assets/img/faces/kendall.jpg";
import FaceAvatar from "assets/img/faces/avatar.jpg";

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Meet Our Team</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img src={FaceMarc} alt="profile-pic" className={classes.img} />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Matt Wilkins, PhD</h4>
              <h6 className={classes.textMuted}>CEO / Founder</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We need to restart the
                human foundation.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceKendall}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Stephanie Castillo</h4>
              <h6 className={classes.textMuted}>DIGITAL MULTIMEDIA SPECIALIST</h6>
              <p className={classes.cardDescription}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation. And I love you like Kanye loves Kanye.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
              <Button href="#pablo" justIcon simple color="linkedin">
                <i className="fab fa-linkedin-in" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceChristian}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Arda Turkman</h4>
              <h6 className={classes.textMuted}>BACK-END DEVELOPER</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="facebook">
                <i className="fab fa-facebook" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={3} sm={3}>
          <Card profile plain>
            <CardAvatar profile plain>
              <a href="#pablo">
                <img
                  src={FaceAvatar}
                  alt="profile-pic"
                  className={classes.img}
                />
              </a>
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Tyler Lemburg</h4>
              <h6 className={classes.textMuted}>JOBVIZ DEVELOPER</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We really need to restart
                the human foundation.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button href="#pablo" justIcon simple color="google">
                <i className="fab fa-google" />
              </Button>
              <Button href="#pablo" justIcon simple color="twitter">
                <i className="fab fa-twitter" />
              </Button>
              <Button href="#pablo" justIcon simple color="dribbble">
                <i className="fab fa-dribbble" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
