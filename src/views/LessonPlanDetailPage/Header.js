import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Image from "../../components/StrapiImage";
import RichText from "../../components/RichText";
import AnchorLink from "react-anchor-link-smooth-scroll";
import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const Header = ({
  Title,
  Subtitle,
  Version,
  LastUpdated,
  SponsoredBy,
  CoverImage,
  SponsorImage,
}) => {
  const classes = useStyles();
  return (
    <div className="Header">
      <div className={classes.container}>
        {/*SectionHeading Div used for nav dots*/}
        <div className={"SectionHeading"} id={"Title"}
             style={{padding: 0, margin: 0}}>
          {/*Dots nav text; not displayed on page*/}
          <span style={{display:"none"}}>Title</span>
        </div>
        <AnchorLink href={"#version_notes"} offset={"125px"}>
        <p>
          Version {Version}{" "}
          {LastUpdated &&
            "(Updated " +
              moment(new Date(LastUpdated))
                .add({ day: 1 })
                .format("MMM D, yyyy") +
              ")"}
        </p>
        </AnchorLink>
        <h2>{Title}</h2>
        <h4>{Subtitle}</h4>
        <GridContainer className="text-center">
          <div className="col">
            <Image {...CoverImage} className="self-center" />
          </div>
        </GridContainer>
        <GridContainer className="sponsor">
          <GridItem xs={12} sm={9} md={9} className={"sponsorDescr"}>
            <h5>Sponsored by:</h5>
            <RichText content={SponsoredBy} />
          </GridItem>
          <GridItem xs={4} sm={3} md={2} className={"sponsorLogo"}>
            <Image {...SponsorImage} />
          </GridItem>
        </GridContainer>

        </div>
    </div>
  );
};

Header.propTypes = {
  Title: PropTypes.string,
  Subtitle: PropTypes.string,
  Version: PropTypes.string,
  LastUpdated: PropTypes.string,
  SponsoredBy: PropTypes.string,
  CoverImage: PropTypes.object,
  SponsorImage: PropTypes.object,
};

export default Header;
