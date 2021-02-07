import React from "react";
import PropTypes from "prop-types";

import Image from "../../../components/Image";
import RichText from "../../../components/RichText";

const Media = ({ Title, Media: image, TopCaption, BottomCaption }) => {
  return (
    <div className="container">
      {Title && <h4>{Title}</h4>}

      {TopCaption && <RichText content={TopCaption} />}

      <Image {...image[0]} />

      {BottomCaption && <RichText content={BottomCaption} />}
    </div>
  );
};

Media.propTypes = {
  Title: PropTypes.string,
  Media: PropTypes.object,
  TopCaption: PropTypes.object,
  BottomCaption: PropTypes.object,
};

export default Media;
