import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import TextField from "@material-ui/core/TextField";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  primaryColor: {
    color: "#2C83C3",
  },
  fontStyle: {
    fontSize: "16px",
    color: "black",
  },
  greyBackground: {
    backgroundColor: "#E0E0E0",
  },
  pinkBackground: {
    backgroundColor: "#FF3DAC",
    borderRadius: "25px",
  },
  purpleBackground: {
    backgroundColor: "#9F4BFF",
    borderRadius: "25px",
  },
  darkGreyFont: {
    color: "#828282",
  },
  headerPadding: {
    paddingTop: "40px",
    paddingBottom: "20px",
  },
  topPadding: {
    paddingTop: "30px",
  },
  topPadding2: {
    paddingTop: "50px",
  },
  textLeft: {
    textAlign: "left",
    paddingLeft: "70px",
  },
};

const useStyles = makeStyles(style);

export default function SectionLessonData() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section)}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={8} md={8}>
          <h2
            className={classNames(
              classes.title,
              classes.justifyContentSpaceBetween
            )}
          >
            Get us in your inbox—get lessons, updates, and funding
            opportunities.
          </h2>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="Tell us your name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <CustomInput
                  labelText="What's your email address?"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <div>
                <input
                  type="radio"
                  id="teacher"
                  name="title"
                  value="teacher"
                ></input>
                <label for="teacher">Are you a Teacher?</label>
                <input
                  type="radio"
                  id="researcher"
                  name="title"
                  value="researcher"
                ></input>
                <label for="researcher">Researcher?</label>
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
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
