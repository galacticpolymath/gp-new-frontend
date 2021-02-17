import React from "react";
// core components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FeatureDetails from "../../../components/FeatureDetails/FeatureDetails";
// @material-ui icons


import addOnsStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/featuresStyle.js";


const useStyles = makeStyles(addOnsStyle);

export default function SectionFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.featuresSection}>
      <FeatureDetails
        keyPhrase1={"1 Lesson"}
        keyPhrase2={"means hundreds of hours of skilled labor."}
        description={"Our basic lesson includes standards alignment, presentations, differentiation, and more. " +
        "On top of that, whether your lesson needs animations, videos with voiceovers, infographics, short podcasts, " +
        "or something else, our team will custom create it. The number of assets per price point depends on the " +
        "complexity of each piece and the needs of the lesson. "}

      />

    </div>
  );
}
