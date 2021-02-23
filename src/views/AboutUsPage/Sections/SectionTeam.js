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

import { makeCloudinaryUrl } from "components/shared/constants";
// import {ReactComponent as ScholarIcon} from "assets/img/google_scholar.svg";
// import SvgIcon from "@material-ui/core";
import Scholar from "components/CustomIcons/googleScholar.js";
import grey from "@material-ui/core/colors/grey";

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

        {/*MATT*/}
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,w_300/v1592966233/Team/Matt_Wilkins_profile_ukorql.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Matt Wilkins, PhD</h4>
              <h6 className={classes.textMuted}>Founder, CEO</h6>
              <p className={classes.cardDescription}>
                A scientist, teacher, writer, and pusher of boulders. Matt wants to live in a world where critical
                thinking and curiosity are as essential as breathing.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="http://www.mattwilkinsbio.com/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fas fa-globe" />
              </Button>
              <Button
                href="https://www.linkedin.com/in/mattwilkinsphd/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="https://twitter.com/mattwilkinsbio"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                href="https://twitter.com/mattwilkinsbio"
                target="_blank"
                justIcon
                simple
                color={"primary"}

              >
                <Scholar style={{transform: "scale(2)"}}/>
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/*STEPH*/}
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "w_150,c_fill,ar_1:1,q_100,g_auto/v1597113803/Team/StephanieCastillo_mu3bln.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Stephanie Castillo</h4>
              <h6 className={classes.textMuted}>
                DIGITAL MULTIMEDIA SPECIALIST
              </h6>
              <p className={classes.cardDescription}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation. And I love you like Kanye loves Kanye.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="https://www.linkedin.com/in/castils/"
                target="_blank"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "w_150,c_fill,ar_1:1,q_100,g_auto/v1595867238/Team/FullSizeRender_Arda_headshot-2_ebakrg.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Arda Turkmen</h4>
              <h6 className={classes.textMuted}>BACK-END DEVELOPER</h6>
              <p className={classes.cardDescription}>
                I love you like Kanye loves Kanye. Don{"'"}t be scared of the
                truth because we need to restart the human foundation.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="https://www.linkedin.com/in/arda-turkmen-604432113/"
                target="_blank"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={4} sm={4}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "w_150,c_fill,ar_1:1,q_100,g_auto/v1597278923/Team/image_2_jjogfs.png"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>Tyler Lemburg</h4>
              <h6 className={classes.textMuted}>JobViz DEVELOPER</h6>
              <p className={classes.cardDescription}>
                And I love you like Kanye loves Kanye. We really need to restart
                the human foundation.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="http://tylerlemburg.com/"
                target="_blank"
                justIcon
                simple
                style={{ color: grey[900] }}
              >
                <i className="fas fa-globe"> </i>
              </Button>
              <Button
                href="https://www.linkedin.com/in/tylerlemburg/"
                target="_blank"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
