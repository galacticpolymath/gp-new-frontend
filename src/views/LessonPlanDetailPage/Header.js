import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Image from "../../components/StrapiImage";
import RichText from "../../components/RichText";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const Header = ({
  Title,
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
        <p>
          Version {Version}{" "}
          {LastUpdated &&
            "(Updated " +
              moment(new Date(LastUpdated)).format("MMM d, yyyy") +
              ")"}
        </p>
        <h1>{Title}</h1>
        <GridContainer className="text-center">
          <div className="col">
            <Image {...CoverImage} className="self-center" />
          </div>
        </GridContainer>
        <GridContainer>
          <GridItem md={8} lg={9}>
            <h5>Sponsored by:</h5>
            <RichText content={SponsoredBy} />
          </GridItem>
          <GridItem md={4} lg={3}>
            <Image {...SponsorImage} />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

Header.propTypes = {
  Title: PropTypes.string,
  Version: PropTypes.string,
  LastUpdated: PropTypes.string,
  SponsoredBy: PropTypes.string,
  CoverImage: PropTypes.object,
  SponsorImage: PropTypes.object,
};

export default Header;
