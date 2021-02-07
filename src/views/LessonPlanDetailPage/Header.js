import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

import Image from "../../components/Image";
import RichText from "../../components/RichText";

const Header = ({
  Title,
  Version,
  LastUpdated,
  SponsoredBy,
  CoverImage,
  SponsorImage,
}) => {
  return (
    <div className="Header">
      <div className="container">
        <p>
          Version {Version}{" "}
          {LastUpdated &&
            "(Updated " +
              moment(new Date(LastUpdated)).format("MMM d, yyyy") +
              ")"}
        </p>
        <h1>{Title}</h1>
        <div className="row text-center">
          <div className="col">
            <Image {...CoverImage} className="self-center" />
          </div>
        </div>
        <div className="row">
          <div className="col col-md-8 col-lg-9">
            <h5>Sponsored by:</h5>
            <RichText content={SponsoredBy} />
          </div>
          <div className="col col-md-4 col-lg-3">
            <Image {...SponsorImage} />
          </div>
        </div>
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
