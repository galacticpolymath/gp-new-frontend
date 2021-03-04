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
import { makeCloudinaryUrl } from "../../../components/shared/constants";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  fontStyle: {
    fontSize: "16px",
    color: "black"
  },
  galacticBlue: {
    color: "#005892"
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
  }
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
            How we do it
          </h1>
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
        <br/>
        <br/>
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <div
              className={classNames(classes.fontStyle, classes.primaryColor)}
            >
              <div>
                <img
                  src={
                    "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__Research_Purple_1_b6pfbv.svg"
                  }
                  height="auto"
                  width="50%"
                  alt={"logo"}
                />
              </div>
              <div
                className={classNames(
                  classes.paddingTop,
                  classes.upperCase,
                  classes.galacticBlue
                )}
              >
                <h3>Researchers,</h3>
                <h3>non-profits,</h3>
                <h3>sustainable corps.</h3>
              </div>
              {/*<div className={classes.paddingTop}></div>*/}
              <h4>
                Government-funded researchers and organizations that want to support research impacts on society,
                hire us to make a body of knowledge available to the public.
              </h4>
              <br />
              <br />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div
              className={classNames(classes.fontStyle, classes.primaryColor)}
            >
              <div>
                <img
                  src={
                    "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__SciComm_Purple_1_qyl1nn.svg"
                  }
                  height="auto"
                  width="50%"
                  alt={"logo"}
                />
              </div>
              <div
                className={classNames(
                  classes.paddingTop,
                  classes.upperCase,
                  classes.galacticBlue
                )}
              >
                <h3>select,</h3>
                <h3>award-winning</h3>
                <h3>science communicators</h3>
              </div>
              {/*<div className={classes.paddingTop}></div>*/}
              <h4>
                Our team of science commnicators, educators, and artists translates these complex topics into
                grade 5-12 lesson plans that can be taught in any subject by a non-expert.
              </h4>
              <br />
              <br />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div
              className={classNames(classes.fontStyle, classes.primaryColor)}
            >
              <div>
                <img
                  src={
                    "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__Teachers_Purple_1_pksgwr.svg"
                  }
                  height="auto"
                  width="50%"
                  alt={"logo"}
                />
              </div>
              <div
                className={classNames(
                  classes.paddingTop,
                  classes.upperCase,
                  classes.galacticBlue
                )}
              >
                <h3>Taught by</h3>
                <h3>educators</h3>
                <h3>anywhere</h3>
              </div>
              {/*<div className={classes.paddingTop}></div>*/}
              <h4>
                Working closely with educators and districts in our growing network, lessons are
                taught in real classrooms across the US.
              </h4>
              <br />
              <br />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <div className={classNames(classes.fontStyle)}>
              <div>
                <img
                  src={
                    "https://res.cloudinary.com/galactic-polymath/image/upload/v1611357034/assets_marketing/GP__Revise_Purple_1_u0yanp.svg"
                  }
                  height="auto"
                  width="50%"
                  alt={"logo"}
                />
              </div>
              <div
                className={classNames(
                  classes.paddingTop,
                  classes.upperCase,
                  classes.galacticBlue
                )}
              >
                <h3>evaluate,</h3>
                <h3>revise,</h3>
                <h3>repeat</h3>
              </div>
              {/*<div className={classes.paddingTop}></div>*/}
              <h4>All of our lessons are continuously evaluated, updated, and
                revised—meaning they are always up-to-date and working to make the jobs of teaching
                and outreach easier!
              </h4>
              <br/>
              <br/>
            </div>
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
              style={{marginTop: "0.75rem",display:"inline-block"}}>
                <img
                  src={makeCloudinaryUrl("v1593304396/logos/GP_logo_grad_transBG_300_tbn4ei.jpeg")}
                  className={classNames(classes.mlAuto, classes.mrAuto)}
                  style={{
                    // width:"10"
                    width: "2rem", display: "inline-block", marginLeft: "1rem",marginRight: "0.25rem"
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
