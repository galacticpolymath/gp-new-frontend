import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";
import { primaryColor, grayColor } from "assets/jss/material-kit-pro-react.js";
import { makeCloudinaryUrl } from "../../../components/shared/constants";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  fontStyle: {
    fontSize: "16px",
    color: "black",
    // Format triplet descriptor text
    "& h4": {
      textAlign: "left",
      padding: "2rem 1.5rem 2rem 2rem"
    }
  },
  gridItemStyle: {
    display: "grid",
    justifySelf: "left",
    alignContent: "center",
    // customize How Section logo images
    "& img": {
      alignSelf: "start",
      justifySelf: "left",
      maxWidth: "250px"
      // marginLeft: "-1rem"
    },
    "& h4": {
      padding: 0
    }

  },
  purp: {
    color: "#6C2D82"
  },
  lightPurp: {
    color: "#6812D1"
  },
  upperCase: {
    textTransform: "uppercase"
  },
  paddingTop: {
    paddingTop: "30px"
  },
  paddingLeft: {
    paddingLeft: "100px"
  },
  imagePadding: {
    paddingTop: "50px",
    paddingRight: "70px"
  },
  subtitle:{
    paddingTop: 0,
  },
  triplet: {
    paddingBottom: "1rem",
    marginLeft: "0",
    textAlign: "left",
    color: primaryColor[0],
    "& h3:first-of-type": {
      marginLeft: "-2rem",
      marginBottom: "0.5rem"
    },
    "& h3": {
      marginBottom: 0,
      marginTop: "0"
    }
  },

  //Special styling for sm to medium devices
  "@media only screen and (min-width: 0px) and (max-width: 959px)": {
    triplet: {
      paddingTop: 0,
      "& h3": {
        marginLeft: "2rem"
      },
      "& h3:first-of-type": {
        marginLeft: "0"
      }

    },
    gridItemStyle: {
      marginLeft: "1rem",
      "& img": {
        paddingTop: "8rem",
        paddingBottom: 0,
        "&.firstImg": {
          paddingTop: "1rem"
        }
      },
      "& h4": {
        paddingBottom: 0
        //Add partial width borders between divs
      },
      "& h4::after": {
        content: "\"↓\"",
        color: grayColor[6],
        fontSize: "12rem",
        fontWeight: "600",
        position: "absolute",
        bottom: "-4rem",
        left: "3rem"
      },
      "& h4.last::after": {
        content: '""'
      }
    }
  },
  // Correct H3 size for medium screens where 4 columns are first displayed
  "@media only screen and (min-width: 960px) and (max-width: 1279px)": {
    triplet: {
      "& h3": {
        fontSize: ".9rem"
      },
      "& h3:first-of-type": {
        marginLeft: "-1rem"
      }
    },
    gridItemStyle: {
      "& h4": {
        fontSize: "0.9rem"
      }
    }
  },




};

const useStyles = makeStyles(style);

export default function SectionHow() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <h1
            className={classNames(
              classes.title,
              classes.purp,
              classes.marginRight
            )}
          >
            What We Do
          </h1>
          <h3
            className={classNames(classes.purp,classes.subtitle)}
            >
            (And how we make it free for teachers)
          </h3>

        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <img
            src={
              "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357041/assets_marketing/Vector_-_dotten_line_mvnvza.svg"
            }
            className={classes.imagePadding}
            height="auto"
            width="110%"
            alt={"Lesson Preview"}
          />
        </GridItem>
      </GridContainer>
      <div>

        <GridContainer
          style={{
            display: "gridContainer", gridAutoRows: "1fr",
            paddingTop: "2.5rem"
          }}>

          {/*Clients: Researchers, etc*/}
          <GridItem xs={12} sm={12} md={3}
                    className={classNames(classes.fontStyle)}
          >
            <GridItem className={classes.gridItemStyle}>
              <img
                src={
                  "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__Research_Purple_1_b6pfbv.svg"
                }
                width={"70%"}
                alt={"logo"}
                className={"firstImg"}
              />
            </GridItem>
            <GridItem
              className={classNames(
                classes.paddingTop,
                classes.upperCase,

                classes.triplet,
                classes.gridItemStyle
              )}
            >
              <h3><b>1.&nbsp;Clients&nbsp;Hire&nbsp;Us</b></h3>
              <h3>Researchers,</h3>
              <h3>nonprofits &</h3>
              <h3>companies pay</h3>
            </GridItem>
            {/*<div className={classes.paddingTop}></div>*/}
            <GridItem className={classes.gridItemStyle}>
              <h4>
                Government-funded researchers and organizations that want to support research impacts on society
                hire us to make a body of knowledge available to the public.
              </h4>
            </GridItem>
          </GridItem>

          {/*translation: complex research, etc*/}
          <GridItem xs={12} sm={12} md={3}
                    className={classNames(classes.fontStyle)}
          >
            <GridItem className={classes.gridItemStyle}>
              <img
                src={
                  "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__SciComm_Purple_1_qyl1nn.svg"
                }
                height="auto"
                width="70%"
                alt={"logo"}

              />
            </GridItem>
            <GridItem
              className={classNames(
                classes.paddingTop,
                classes.upperCase,

                classes.triplet
              )}
            >
              <h3><b>2.&nbsp;We&nbsp;translate</b></h3>
              <h3>research</h3>
              <h3>into</h3>
              <h3>lessons</h3>
            </GridItem>
            <GridItem className={classes.gridItemStyle}>
              <h4>
                Our team of science communicators, educators, and artists work directly with subject experts to
                translate our clients' area of focus into free lessons for grades 5-12. <em>Our goal is for every lesson to be ready to
                teach in any subject classroom by a non-expert with 15 min. of prep time.</em>
              </h4>
            </GridItem>
          </GridItem>

          {/*Educators, etc*/}
          <GridItem xs={12} sm={12} md={3} className={classes.fontStyle}>
            <GridItem
              className={classNames(classes.gridItemStyle)}
            >
              <img
                src={
                  "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__Teachers_Purple_1_pksgwr.svg"
                }
                height="auto"
                width="70%"
                alt={"logo"}

              />
            </GridItem>
            <GridItem
              className={classNames(
                classes.paddingTop,
                classes.upperCase,

                classes.triplet
              )}
            >
              <h3><b>3.&nbsp;We&nbsp;Publish</b></h3>
              <h3>Free lessons</h3>
              <h3>for</h3>
              <h3>everyone</h3>
            </GridItem>
            <GridItem className={classes.gridItemStyle}>
              <h4>
                Working closely with educators and districts in our growing network, lessons are
                tested and taught in classrooms. Equal access to lessons means more of the
                public can connect with the body of knowledge our clients care about.
              </h4>
            </GridItem>
          </GridItem>

          {/*Evaluate, etc*/}
          <GridItem xs={12} sm={12} md={3} className={classes.fontStyle}>
            <GridItem className={classNames(classes.gridItemStyle)}>
              <img
                src={
                  "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__Revise_Purple_1_u0yanp.svg"
                }
                height="auto"
                width="70%"
                alt={"logo"}

              />
            </GridItem>
            <GridItem
              className={classNames(
                classes.paddingTop,
                classes.upperCase,
                classes.triplet,
                classes.gridItemStyle
              )}
            >
              <h3><b>4.&nbsp;We&nbsp;Improve</b></h3>
              <h3>evaluate,</h3>
              <h3>revise,</h3>
              <h3>repeat</h3>
            </GridItem>
            <GridItem
              className={classNames(classes.gridItemStyle)}
            >
              <h4 className={"last"}>All of our lessons are continuously evaluated, updated, and
                revised—meaning they are always up-to-date and working to make the jobs of teaching
                and outreach easier!
              </h4>
            </GridItem>
          </GridItem>

        </GridContainer>
      </div>
      <div>
        <footer
          className={classNames(
            classes.fontStyle,
            classes.paddingTop,
            classes.lightPurp,
            classes.upperCase
          )}
        >
          <h3>

            Real&nbsp;research&nbsp;+ real&nbsp;stories&nbsp;+ real&nbsp;data&nbsp;+ real&nbsp;careers&nbsp;=
            <span
              style={{ marginTop: "0.75rem", display: "inline-block" }}>
                <img
                  src={makeCloudinaryUrl("w_600/v1593304396/logos/GP_logo_grad_transBG_300_tbn4ei.jpeg")}
                  className={classNames(classes.mlAuto, classes.mrAuto)}
                  style={{
                    // width:"10"
                    width: "2rem", display: "inline-block", marginLeft: "1rem", marginRight: "0.25rem"
                  }}
                  alt={"The Galactic Polymath logo. A starburst of lines and dots, in blue, purple and pink."}
                /><b>Real&nbsp;learning</b>
              </span>

          </h3>
        </footer>
      </div>
    </div>
  );
}
