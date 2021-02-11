import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Image from "../../../components/Image";
import RichText from "../../../components/RichText";

import lessonPlanDetailsStyle from "assets/jss/material-kit-pro-react/views/lessonPlanDetailsStyle.js";
const useStyles = makeStyles(lessonPlanDetailsStyle);

const SteamBadge = ({ Title, Description, Footnote, Badge }) => {
  const classes = useStyles();
  return (
    <div className={classes.container + " SteamBadge"}>
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
  Description: PropTypes.string,
  Footnote: PropTypes.string,
  Badge: PropTypes.object,
};

export default SteamBadge;
