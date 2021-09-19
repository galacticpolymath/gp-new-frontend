import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import MailOutlineIcon from "@material-ui/icons/MailOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

// import TextField from "@material-ui/core/TextField";
// import { blackColor } from "../../../assets/jss/material-kit-pro-react";

const style = {
  ...teamsStyle,
  ...teamStyle,
  button: {
    display: "block",
    margin: "auto 0",
    width: "fit-content",
  },
  buttonContainer: {
    padding: "5% 0",
    display: "flex",
    justifyContent: "left",
    alignContent: "center",
  },
  textContainer: {
    margin: "auto 0",
  },
  subscribeText: {
    display: "block",
    margin: 0,
  },
  centerAlign: {
    alignItems: "center",
  },

  subscribeContainer: {
    padding: "10px 10%",

    margin: "10% 0",
    //  add inner box shadow effect
    boxShadow:
      "inset 4vw -2vw 10vw 3px rgba(108,45,130,.2), " + //light purple inset
      "inset -10vw 2vw 10vw 3px rgba(44,131,195,.5), " + //big blue asymmetrical bleed
      "0px 0px 2vw 2px rgba(44,131,195,0.6)," + //small blue outer shadow
      "0px 0px 3vw 1px rgba(108,45,130,0.15)", //small purple shadow
  },
  textLeft: {
    textAlign: "left",
  },

  "@media only screen and (max-width: 600px) ": {
    /* sm phones */
    subscribeContainer: {
      padding: "5% 10%",
      margin: "20% 0",
      "& h3": {
        fontSize: "1.6rem",
      },
      "& h4": {
        marginBottom: "0.5rem",
      },
    },
    buttonContainer: {
      paddingLeft: "15px",
    },
  },
};

const useStyles = makeStyles(style);

export default function SectionSubscribe() {
  const classes = useStyles();
  return (
    <>
      <div className={"SectionHeading"} id={"Subscribe"}>
        {/*Dots nav text; not displayed on page*/}
        <span style={{ display: "none" }}>Subscribe</span>

        <GridContainer
          justify="center"
          className={classNames(classes.section, classes.subscribeContainer)}
        >
          <GridItem
            xs={12}
            sm={8}
            md={6}
            lg={5}
            className={classNames(
              classes.textLeft,
              classes.centerAlign,
              classes.textContainer
            )}
          >
            <h3 className={classes.subscribeText}>
              <b>Join our mailing list</b>
            </h3>
            <h4 className={classes.subscribeText}>
              Get updates and early access to our latest free lessons and
              learning tools.
            </h4>
          </GridItem>
          <GridItem
            xs={12}
            sm={4}
            md={6}
            lg={5}
            className={classNames(classes.buttonContainer, classes.centerAlign)}
          >
            <Button
              color="primary"
              size="lg"
              href="https://eepurl.com/g_kQ4T"
              className={classNames(classes.button)}
            >
              <MailOutlineIcon style={{ marginRight: "0.75rem" }} />
              Subscribe
            </Button>
          </GridItem>

          {/*/*THE ABOVE BUTTON IS A PLACEHOLDER TILL WE CAN CONNECT THE BELOW FORM TO SENDGRID*/}

          {/*<form>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="Tell us your name"
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <CustomInput
                labelText="What's your email address?"
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
            <div>
              <div className={classes.title}>Your interest in Galactic Polymath:</div>
              <input
                type="checkBox"
                id="teaching"
                name="teaching"
              />
              <label htmlFor="teaching"
                     className={classes.teaching}>
                Teaching
              </label>
              <input
                type="checkBox"
                id="outreach"
                name="outreach"
              />
              <label htmlFor="outreach"
                     className={classes.teaching}>
                Outreach
              </label>
            </div>
            <GridItem
              xs={12}
              sm={4}
              md={4}
              className={classes.mrAuto + " " + classes.mlAuto}
            >
              <Button>SUBMIT</Button>
            </GridItem>
          </GridContainer>
        </form>*/}
        </GridContainer>
      </div>
    </>
  );
}
