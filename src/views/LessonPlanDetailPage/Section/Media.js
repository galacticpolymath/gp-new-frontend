import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Image from "../../../components/Image";
import RichText from "../../../components/RichText";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

const Media = ({ Title, Media: image, TopCaption, BottomCaption }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {Title && <h4>{Title}</h4>}

      {TopCaption && <RichText content={TopCaption} />}

      <Image {...image[0]} />

      {BottomCaption && <RichText content={BottomCaption} />}
    </div>
  );
};

Media.propTypes = {
  Title: PropTypes.string,
  Media: PropTypes.array,
  TopCaption: PropTypes.string,
  BottomCaption: PropTypes.string,
};

export default Media;
