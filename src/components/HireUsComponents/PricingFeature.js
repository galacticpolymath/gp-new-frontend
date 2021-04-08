import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingFeature(props) {
  const { boldedLabel, description, linkTarget, scrollOffset } = props;
  const classes = useStyles();

  return (
    <li
      className={classes.pfContainer}
      style={{
        minHeight: props.minHeight,
      }}
    >
      <AnchorLink
        href={linkTarget}
        offset={scrollOffset}
        className={classes.pfLink}
      >
        <div className={classes.gridCont}>
          <div className={classes.pfTXT}>
            <h4>
              <b className={classes.boldedLabel}>{boldedLabel}&nbsp;</b>
            </h4>
          </div>
          <div className={classes.pfDescription}>
            <h4>{description}</h4>
          </div>
        </div>
      </AnchorLink>
    </li>
  );
}

PricingFeature.defaultProps = {
  scrollOffset: "125px",
  minHeight: "0",
};
