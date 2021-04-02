import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

// import TextField from "@material-ui/core/TextField";
import { blackColor } from "../../../assets/jss/material-kit-pro-react";


const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  subscribeContainer:{
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  primaryColor: {
    color: "#2C83C3"
  },
  fontStyle: {
    fontSize: "16px",
    color: "black"
  },
  greyBackground: {
    backgroundColor: "#E0E0E0"
  },
  pinkBackground: {
    backgroundColor: "#FF3DAC",
    borderRadius: "25px"
  },
  purpleBackground: {
    backgroundColor: "#9F4BFF",
    borderRadius: "25px"
  },
  gradientBackground:{
    background: "linear-gradient(148deg, rgba(94,94,94,0.6) 0%, rgba(240,244,255,1) 100%)"
  },
  darkGreyFont: {
    color: "#828282"
  },
  headerPadding: {
    paddingTop: "40px",
    paddingBottom: "20px"
  },
  topPadding: {
    paddingTop: "30px"
  },
  topPadding2: {
    paddingTop: "50px"
  },
  teaching:{
    paddingRight: "1rem"
  },
  textLeft: {
    textAlign: "left",
    paddingLeft: "70px"
  },
  title: {
    color: blackColor,
    paddingBottom: "0.5rem",
  }
};

const useStyles = makeStyles(style);

export default function SectionSubscribe() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section,classes.subscribeContainer)}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2
            className={classNames(
              classes.title,
              classes.justifyContentSpaceBetween,
            )}
          >
            <b>Join our mailing list</b>—get updates and insider access to our latest free lessons and learning tools.
          </h2>

          <Button color="primary" size="lg" href="https://eepurl.com/g_kQ4T">

            <MailOutlineIcon
            style={{marginRight:"0.75rem"}}
            />
            Subscribe
          </Button>
        </GridItem>



          {/*THE ABOVE BUTTON IS A PLACEHOLDER TILL WE CAN CONNECT THE BELOW FORM TO SENDGRID*/}

          {/*<form>*/}
          {/*  <GridContainer>*/}
          {/*    <GridItem xs={12} sm={6} md={6}>*/}
          {/*      <CustomInput*/}
          {/*        labelText="Tell us your name"*/}
          {/*        id="name"*/}
          {/*        formControlProps={{*/}
          {/*          fullWidth: true*/}
          {/*        }}*/}
          {/*      />*/}
          {/*    </GridItem>*/}
          {/*    <GridItem xs={12} sm={6} md={6}>*/}
          {/*      <CustomInput*/}
          {/*        labelText="What's your email address?"*/}
          {/*        id="email"*/}
          {/*        formControlProps={{*/}
          {/*          fullWidth: true*/}
          {/*        }}*/}
          {/*      />*/}
          {/*    </GridItem>*/}
          {/*    <div>*/}
          {/*      <div className={classes.title}>Your interest in Galactic Polymath:</div>*/}
          {/*      <input*/}
          {/*        type="checkBox"*/}
          {/*        id="teaching"*/}
          {/*        name="teaching"*/}
          {/*      />*/}
          {/*      <label htmlFor="teaching"*/}
          {/*             className={classes.teaching}>*/}
          {/*        Teaching*/}
          {/*      </label>*/}
          {/*      <input*/}
          {/*        type="checkBox"*/}
          {/*        id="outreach"*/}
          {/*        name="outreach"*/}
          {/*      />*/}
          {/*      <label htmlFor="outreach"*/}
          {/*             className={classes.teaching}>*/}
          {/*        Outreach*/}
          {/*      </label>*/}
          {/*    </div>*/}
          {/*    <GridItem*/}
          {/*      xs={12}*/}
          {/*      sm={4}*/}
          {/*      md={4}*/}
          {/*      className={classes.mrAuto + " " + classes.mlAuto}*/}
          {/*    >*/}
          {/*      <Button>SUBMIT</Button>*/}
          {/*    </GridItem>*/}
          {/*  </GridContainer>*/}
          {/*</form>*/}

      </GridContainer>
    </div>
  );
}
