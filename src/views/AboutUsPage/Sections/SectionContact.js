import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";
import { roseColor } from "../../../assets/jss/material-kit-pro-react";


const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  // const [specialitySelect, setSpecialitySelect] = React.useState("1");
  // const handleSpeciality = event => {
  //   setSpecialitySelect(event.target.value);
  // };
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >

          <h2 className={classNames(classes.title, classes.textCenter)}>
            Want to get involved?
            <EmojiPeopleIcon
              style={{
                color: roseColor[0], fontSize: "2.6rem",
                marginLeft: ".3rem", marginBottom: "-0.8rem"
              }} />
          </h2>
          <h4>
            We're a small, but dedicated team at the moment! If you're interested in
            volunteering or contracting out your coding, webdev, art, graphic design, or lesson design skills;
            collaborating in some other way; or perhaps joining the team full-time when funding is available–get in
            touch!
          </h4>
          <h4>* If you're a grad student on a GRFP or an NSF-funded RA, please check out <a
            href={"https://docs.google.com/document/d/1fTYA8-2YQDPHyKN9SB23dLCcR77bbGOhwIG7SLN2yGg/preview"}>this
            potential funding opportunity!</a></h4>
        </GridItem>
      </GridContainer>
      {/*<form>*/}
      {/*  <GridContainer>*/}
      {/*    <GridItem md={4} sm={4}>*/}
      {/*      <CustomInput*/}
      {/*        labelText="Your name"*/}
      {/*        formControlProps={{*/}
      {/*          fullWidth: true*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem md={4} sm={4}>*/}
      {/*      <CustomInput*/}
      {/*        labelText="Your email"*/}
      {/*        formControlProps={{*/}
      {/*          fullWidth: true*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    </GridItem>*/}
      {/*    <GridItem md={4} sm={4}>*/}
      {/*      <FormControl*/}
      {/*        fullWidth*/}
      {/*        className={*/}
      {/*          classes.selectFormControl +*/}
      {/*          " " +*/}
      {/*          classes.selectUnderlineRoot*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <Select*/}
      {/*          MenuProps={{*/}
      {/*            className: classes.selectMenu*/}
      {/*          }}*/}
      {/*          classes={{*/}
      {/*            select: classes.select*/}
      {/*          }}*/}
      {/*          value={specialitySelect}*/}
      {/*          onChange={handleSpeciality}*/}
      {/*          inputProps={{*/}
      {/*            name: "specialitySelect",*/}
      {/*            id: "speciality-select"*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          <MenuItem*/}
      {/*            disabled*/}
      {/*            classes={{*/}
      {/*              root: classes.selectMenuItem*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Speciality*/}
      {/*          </MenuItem>*/}
      {/*          <MenuItem*/}
      {/*            classes={{*/}
      {/*              root: classes.selectMenuItem,*/}
      {/*              selected: classes.selectMenuItemSelected*/}
      {/*            }}*/}
      {/*            value="1"*/}
      {/*          >*/}
      {/*            I{"'"}m a Designer*/}
      {/*          </MenuItem>*/}
      {/*          <MenuItem*/}
      {/*            classes={{*/}
      {/*              root: classes.selectMenuItem,*/}
      {/*              selected: classes.selectMenuItemSelected*/}
      {/*            }}*/}
      {/*            value="2"*/}
      {/*          >*/}
      {/*            I{"'"}m a Developer*/}
      {/*          </MenuItem>*/}
      {/*          <MenuItem*/}
      {/*            classes={{*/}
      {/*              root: classes.selectMenuItem,*/}
      {/*              selected: classes.selectMenuItemSelected*/}
      {/*            }}*/}
      {/*            value="3"*/}
      {/*          >*/}
      {/*            I{"'"}m a Hero*/}
      {/*          </MenuItem>*/}
      {/*        </Select>*/}
      {/*      </FormControl>*/}
      {/*    </GridItem>*/}
      {/*  </GridContainer>*/}
      {/*  <GridContainer>*/}
      {/*    <GridItem*/}
      {/*      md={4}*/}
      {/*      sm={4}*/}
      {/*      className={classNames(*/}
      {/*        classes.mrAuto,*/}
      {/*        classes.mlAuto,*/}
      {/*        classes.textCenter*/}
      {/*      )}*/}
      {/*    >*/}
      {/*    </GridItem>*/}
      {/*  </GridContainer>*/}
      {/*</form>*/}
      <GridContainer className={classNames(classes.justifyContent, classes.emailButton)}>
        <GridItem classNames={classNames(classes.mlAuto, classes.mrAuto, classes.justifyContent, classes.emailButton)}>
          <Button
            color="primary"
            round
            href="mailto:galacticpolymath@gmail.com?subject=GP%20Collaboration?"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Let{"'"} s talk
          </Button>
        </GridItem>

      </GridContainer>
    </div>
  );
}
