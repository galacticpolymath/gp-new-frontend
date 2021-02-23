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
      {/*LEADERSHIP*/}
      <div className={classes.sectionLabel}
      style={{paddingTop: "0"}}
      >
        <h3>LEADERSHIP</h3>
        <h4>After doing biological research for over a decade and teaching in Nashville public middle schools for
          3&nbsp;1&frasl;2 years, Matt
          left his position as a postdoc at Vanderbilt's Collaborative for STEM Education and Outreach in February 2021
          to focus on
          GP full time.</h4>
      </div>
      <GridContainer className={classes.justifyContent}>

        {/*MATT*/}
        <GridItem sm={10}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1592966233/Team/Matt_Wilkins_profile_ukorql.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                Matt Wilkins, PhD
              </h4>
              <h6 className={classes.textMuted}>
                Founder, CEO
              </h6>
              <p className={classes.cardDescription}>
                A scientist, teacher, writer, and pusher of boulders. Matt wants to live in a world where critical
                thinking and curiosity are as essential as breathing. Likes rock climbing, wildlife photography, and
                doing silly voices.
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
                href="https://github.com/drwilkins"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-github" />
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
                href="https://scholar.google.com/citations?user=MZKGDvAAAAAJ&hl=en"
                target="_blank"
                justIcon
                simple
                color={"primary"}

              >
                <Scholar />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/*PRODUCT TEAM*/}
      <div className={classes.sectionLabel}>
        <h3>PRODUCT TEAM</h3>
        <h4>The incredible group of multitalented scientists, communicators, and education experts responsible for
          bringing each Galactic Polymath lesson to life.</h4>
      </div>
      <GridContainer className={classes.justifyContent}>
        {/*STEPH*/}
        <GridItem md={4} sm={12}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1597113803/Team/StephanieCastillo_mu3bln.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                Stephanie Castillo
              </h4>
              <h6 className={classes.textMuted}>
                DIGITAL MULTIMEDIA SPECIALIST
              </h6>
              <p className={classes.cardDescription}>
                A PhD candidate in science communication, award winning video producer,and previous Jackson Wild Media
                Lab Fellow. She is also founder of Phuture Doctors—a media company showcasing diverse voices in STEM.
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
              <Button
                href="https://www.linkedin.com/in/castils/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="https://twitter.com/PhutureDoctors"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                href="https://www.youtube.com/channel/UCyvY9PeDHl-CW_nuGn2Caug"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-youtube" />
              </Button>
              <Button
                href="http://instagram.com/phuturedoctors"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-instagram" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        {/*ELAINE*/}
        <GridItem md={4} sm={12}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1613059086/Team/E.Perignat_Headshot_1_h4avls.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                Elaine Perignat, PhD
              </h4>
              <h6 className={classes.textMuted}>
                Education Specialist
              </h6>
              <p className={classes.cardDescription}>
                A spirited over-thinker with genuine enthusiasm for teaching and learning. She loves to paint, create,
                build, and play if it means getting her hands dirty. Literally.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="https://scholar.google.com/citations?user=G12SJQoAAAAJ&hl=en&oi=ao"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <Scholar />
              </Button>
              {/*<Button*/}
              {/*  href=""*/}
              {/*  target="_blank"*/}
              {/*  justIcon*/}
              {/*  simple*/}
              {/*  color={"primary"}*/}
              {/*>*/}
              {/*  <i className="fab fa-linkedin" />*/}
              {/*</Button>*/}
              {/*<Button*/}
              {/*  href=""*/}
              {/*  target="_blank"*/}
              {/*  justIcon*/}
              {/*  simple*/}
              {/*  color={"primary"}*/}
              {/*>*/}
              {/*  <i className="fab fa-twitter" />*/}
              {/*</Button>*/}
              {/*<Button*/}
              {/*  href=""*/}
              {/*  target="_blank"*/}
              {/*  justIcon*/}
              {/*  simple*/}
              {/*  color={"primary"}*/}
              {/*>*/}
              {/*  <i className="fab fa-youtube" />*/}
              {/*</Button>*/}
              {/*<Button*/}
              {/*  href=""*/}
              {/*  target="_blank"*/}
              {/*  justIcon*/}
              {/*  simple*/}
              {/*  color={"primary"}*/}
              {/*>*/}
              {/*  <i className="fab fa-instagram" />*/}
              {/*</Button>*/}
            </CardFooter>
          </Card>
        </GridItem>

        {/*CARVER*/}
        <GridItem md={4} sm={12}>
          <Card profile plain>
            <CardAvatar profile plain>
              <img
                src={makeCloudinaryUrl(
                  "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1613059065/Team/Carver_Lee_copy_fcxfg7.jpg"
                )}
                alt="profile-pic"
                className={classes.img}
              />
            </CardAvatar>
            <CardBody plain>
              <h4 className={classes.cardTitle}>
                Carver Lee, MSc
              </h4>
              <h6 className={classes.textMuted}>
                Graphic Design + Marketing Lead
              </h6>
              <p className={classes.cardDescription}>
                A geologist, sailor, teacher, and designer all rolled into one, Carver believes that learning and
                creating is always the way forward.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyContent}>
              <Button
                href="https://www.csaltdesign.co/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fas fa-globe" />
              </Button>
              <Button
                href="https://www.linkedin.com/in/carverelee/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="https://twitter.com/basalticcraver"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                href="https://www.instagram.com/carver.carve/"
                target="_blank"
                justIcon
                simple
                color={"primary"}
              >
                <i className="fab fa-instagram" />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/*---------------*/}
      {/*WEB DEV*/}
      <GridContainer className={classes.justifyContent}>
      <div className={classes.sectionLabel}>
        <h3>DEV TEAM</h3>
        <h4>The talented group building and maintaining our site and a growing variety of publishing and teaching tools.
          Programming in React.js, SASS, CSS, HTML, R and more.</h4>
      </div>

        {/*KENZIE*/}
      <GridItem md={4} sm={12}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img
              src={makeCloudinaryUrl(
                "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1614045950/Team/Kenzie_Bottoms_xgpc0u.jpg"
              )}
              alt="profile-pic"
              className={classes.img}
            />
          </CardAvatar>
          <CardBody plain>
            <h4 className={classes.cardTitle}>
              Kenzie Bottoms
            </h4>
            <h6 className={classes.textMuted}>
              Lead Developer, GP Publishing Workflow
            </h6>
            <p className={classes.cardDescription}>
              A problem solver who codes, makes art, and roller skates, Kenzie is trying to pay it forward and
              delighted to work with such kind, talented people in the process.
            </p>
          </CardBody>
          <CardFooter className={classes.justifyContent}>
            <Button
              href="https://kenzie.ink/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fas fa-globe" />
            </Button>
            <Button
              href="https://github.com/kenziebottoms"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-github" />
            </Button>
            <Button
              href="https://www.linkedin.com/in/kenzie-bottoms"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-linkedin" />
            </Button>
            <Button
              href="https://twitter.com/kenziebottoms"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-twitter" />
            </Button>
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-instagram" />*/}
            {/*</Button>*/}
          </CardFooter>
        </Card>
      </GridItem>

        {/*LEIGHA*/}
      <GridItem md={4} sm={12}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img
              src={makeCloudinaryUrl(
                "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1613059139/Team/Leigha_Robinson_nqvaet.jpg"
              )}
              alt="profile-pic"
              className={classes.img}
            />
          </CardAvatar>
          <CardBody plain>
            <h4 className={classes.cardTitle}>
              Leigha Robinson
            </h4>
            <h6 className={classes.textMuted}>
              Lead Developer, JobViz
            </h6>
            <p className={classes.cardDescription}>
              A Software Developer with a love of music, gardening, and using technology to make the world a better
              place. Leigha deeply believes in TEAM: Together Everyone Achieves More!
            </p>
          </CardBody>
          <CardFooter className={classes.justifyContent}>
            <Button
              href="https://leigharobinson.github.io/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fas fa-globe" />
            </Button>
            <Button
              href="https://github.com/leigharobinson?tab=repositories"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-github" />
            </Button>
            <Button
              href="https://www.linkedin.com/in/leigha-robinson/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-linkedin" />
            </Button>
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-twitter" />*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-youtube" />*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-instagram" />*/}
            {/*</Button>*/}
          </CardFooter>
        </Card>
      </GridItem>
        {/*CASTLE*/}
      <GridItem md={4} sm={12}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img
              src={makeCloudinaryUrl(
                "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1614045951/Team/Castle_Crawford_nsmjgb.jpg"
              )}
              alt="profile-pic"
              className={classes.img}
            />
          </CardAvatar>
          <CardBody plain>
            <h4 className={classes.cardTitle}>
              Castle Crawford
            </h4>
            <h6 className={classes.textMuted}>
              Front End Web Developer
            </h6>
            <p className={classes.cardDescription}>
              A food fanatic, day hiker, video game vanquisher, Corgi lover, and Software Developer. Loves being part
              of a team focused on making a difference.
            </p>
          </CardBody>
          <CardFooter className={classes.justifyContent}>
            <Button
              href="https://github.com/castlesmadeofcode"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-github" />
            </Button>
            <Button
              href="https://www.linkedin.com/in/castlecrawford13/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-linkedin" />
            </Button>
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-twitter" />*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-youtube" />*/}
            {/*</Button>*/}
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-instagram" />*/}
            {/*</Button>*/}
          </CardFooter>
        </Card>
      </GridItem>
        {/*MARIA*/}
      <GridItem md={4} sm={12}>
        <Card profile plain>
          <CardAvatar profile plain>
            <img
              src={makeCloudinaryUrl(
                "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1614046222/Team/Maria_Brock_y752ov.jpg"
              )}
              alt="profile-pic"
              className={classes.img}
            />
          </CardAvatar>
          <CardBody plain>
            <h4 className={classes.cardTitle}>
              Maria Brock
            </h4>
            <h6 className={classes.textMuted}>
              Front End Web Developer
            </h6>
            <p className={classes.cardDescription}>
              A Software Developer who loves problem solving, puzzles, and art. Loves gaming, learning, and crocheting
              adorable, nerdy things. Powered by coffee.
            </p>
          </CardBody>
          <CardFooter className={classes.justifyContent}>
            <Button
              href="https://www.mariabrock.dev/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fas fa-globe" />
            </Button>
            <Button
              href="https://github.com/mariabrock?tab=repositories"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-github" />
            </Button>
            <Button
              href="https://www.linkedin.com/in/maria-brock/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-linkedin" />
            </Button>

            <Button
              href="https://twitter.com/actual_jedi"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-twitter" />
            </Button>
            {/*<Button*/}
            {/*  href=""*/}
            {/*  target="_blank"*/}
            {/*  justIcon*/}
            {/*  simple*/}
            {/*  color={"primary"}*/}
            {/*>*/}
            {/*  <i className="fab fa-youtube" />*/}
            {/*</Button>*/}
            <Button
              href="https://www.instagram.com/actual_jedi/"
              target="_blank"
              justIcon
              simple
              color={"primary"}
            >
              <i className="fab fa-instagram" />
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
        {/*CAITLIN*/}
        {/*<GridItem md={4} sm={12}>*/}
        {/*  <Card profile plain>*/}
        {/*    <CardAvatar profile plain>*/}
        {/*      <img*/}
        {/*        src={makeCloudinaryUrl(*/}
        {/*          "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1597113803/Team/StephanieCastillo_mu3bln.jpg"*/}
        {/*        )}*/}
        {/*        alt="profile-pic"*/}
        {/*        className={classes.img}*/}
        {/*      />*/}
        {/*    </CardAvatar>*/}
        {/*    <CardBody plain>*/}
        {/*      <h4 className={classes.cardTitle}>PERSON NAME</h4>*/}
        {/*      <h6 className={classes.textMuted}>*/}
        {/*        TITLE*/}
        {/*      </h6>*/}
        {/*      <p className={classes.cardDescription}>*/}
        {/*        BUNCHA TEXT*/}
        {/*      </p>*/}
        {/*    </CardBody>*/}
        {/*    <CardFooter className={classes.justifyContent}>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fas fa-globe" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-linkedin" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-twitter" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-youtube" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-instagram" />*/}
        {/*      </Button>*/}
        {/*    </CardFooter>*/}
        {/*  </Card>*/}
        {/*</GridItem>*/}


        {/*TEMPLATE*/}
        {/*<GridItem md={4} sm={12}>*/}
        {/*  <Card profile plain>*/}
        {/*    <CardAvatar profile plain>*/}
        {/*      <img*/}
        {/*        src={makeCloudinaryUrl(*/}
        {/*          ""*/}
        {/*        )}*/}
        {/*        alt="profile-pic"*/}
        {/*        className={classes.img}*/}
        {/*      />*/}
        {/*    </CardAvatar>*/}
        {/*    <CardBody plain>*/}
        {/*      <h4 className={classes.cardTitle}>PERSON NAME</h4>*/}
        {/*      <h6 className={classes.textMuted}>*/}
        {/*        TITLE*/}
        {/*      </h6>*/}
        {/*      <p className={classes.cardDescription}>*/}
        {/*        BUNCHA TEXT*/}
        {/*      </p>*/}
        {/*    </CardBody>*/}
        {/*    <CardFooter className={classes.justifyContent}>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fas fa-globe" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-linkedin" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-twitter" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-youtube" />*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        href=""*/}
        {/*        target="_blank"*/}
        {/*        justIcon*/}
        {/*        simple*/}
        {/*        color={"primary"}*/}
        {/*      >*/}
        {/*        <i className="fab fa-instagram" />*/}
        {/*      </Button>*/}
        {/*    </CardFooter>*/}
        {/*  </Card>*/}
        {/*</GridItem>*/}
    </GridContainer>

  {/*//--------------------*/
  }
  {/*// ALUMNI*/
  }
  {/*//--------------------*/
  }

  {/*ARDA*/
  }
  <div className={classes.sectionLabel}>
    <h3>ALUMNI</h3>
    <h4>We wouldn't be here without the hard work of these amazing folks!</h4>
  </div>;
  <GridContainer className={classes.justifyContent}>
    <GridItem md={4} sm={12}>
      <Card profile plain>
        <CardAvatar profile plain>
          <img
            src={makeCloudinaryUrl(
              "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1595867238/Team/FullSizeRender_Arda_headshot-2_ebakrg.jpg"
            )}
            alt="profile-pic"
            className={classes.img}
          />
        </CardAvatar>
        <CardBody plain>
          <h4 className={classes.cardTitle}>Arda Turkmen</h4>
          <h6 className={classes.textMuted}>Back End Developer</h6>
          <p className={classes.cardDescription}>
            Arda is a senior at Vanderbilt University, majoring in Computer Science and Mathematics. He was key in
            developing our early website in 2019-2020 using Node.JS, React, and SQL managed through AWS.
          </p>
        </CardBody>
        <CardFooter className={classes.justifyContent}>
          <Button
            href="https://www.linkedin.com/in/arda-turkmen-604432113/"
            target="_blank"
            justIcon
            simple
            color="primary"
          >
            <i className="fab fa-linkedin" />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>;
    {/*TYLER*/
    }
    <GridItem md={4} sm={12}>
      <Card profile plain>
        <CardAvatar profile plain>
          <img
            src={makeCloudinaryUrl(
              "q_auto:best,f_auto,c_fill,g_face,w_300,h_300/v1597278923/Team/image_2_jjogfs.png"
            )}
            alt="profile-pic"
            className={classes.img}
          />
        </CardAvatar>
        <CardBody plain>
          <h4 className={classes.cardTitle}>Tyler Lemburg</h4>
          <h6 className={classes.textMuted}>Previous Lead Developer, JobViz</h6>
          <p className={classes.cardDescription}>
            A Senior Software Engineer working remotely for Cognito. Tyler built the first iteration of JobViz. He
            has worked for several nonprofits as a web developer and recently earned a Masters in Climatology.
          </p>
        </CardBody>
        <CardFooter className={classes.justifyContent}>
          <Button
            href="http://tylerlemburg.com/"
            target="_blank"
            justIcon
            simple
            color="primary"
          >
            <i className="fas fa-globe"> </i>
          </Button>
          <Button
            href="https://www.linkedin.com/in/tylerlemburg/"
            target="_blank"
            justIcon
            simple
            color="primary"
          >
            <i className="fab fa-linkedin" />
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  </GridContainer>;
</div>
)
;
}
