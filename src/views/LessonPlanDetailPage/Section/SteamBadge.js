import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Image from "../../../components/Image";
import RichText from "../../../components/RichText";

const SteamBadge = ({ Title, Description, Footnote, Badge }) => {
  return (
    <div className="container SteamBadge">
      <Image {...Badge} />

      <div className="accordion" defaultActiveKey={null}>
        <div className="accordion-toggle" variant="link" eventKey={Title}>
          <h3>{Title}</h3>
        </div>
        <div className="accordion-collapse" eventKey={Title}>
          <Fragment>
            <RichText content={Description} />
            <RichText className="footnote" content={Footnote} />
          </Fragment>
        </div>
      </div>
    </div>
  );
};

SteamBadge.propTypes = {
  Title: PropTypes.string,
  Description: PropTypes.object,
  Footnote: PropTypes.object,
  Badge: PropTypes.object,
};

export default SteamBadge;
