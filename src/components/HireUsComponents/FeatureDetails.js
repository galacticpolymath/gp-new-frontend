import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

import featureDetailStyle from "assets/jss/material-kit-pro-react/components/featureDetailsStyle.js";

const useStyles = makeStyles(featureDetailStyle);

export default function FeatureDetails(props) {
  const { id, keyPhrase1, keyPhrase2, description } = props;
  const classes = useStyles();

  return (
    <h3 className={classes.featureDeets} id={id}>
      <span>
        <b className={classes.keyPhrase1}>{keyPhrase1}&nbsp;</b>
        <span className={classes.keyPhrase2}>{keyPhrase2}&nbsp;</span>
        <span className={classes.description}>{description}&nbsp;</span>
      </span>
      <div className={classes.toTop}>
        <AnchorLink href={"#priceList"} offset={"125px"}>
          ⤴ To Top
        </AnchorLink>
      </div>
    </h3>
  );
}
