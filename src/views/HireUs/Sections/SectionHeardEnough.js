import React from "react";
// core components

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons



import { makeCloudinaryUrl } from "../../../components/shared/constants";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";


import { roseColor, hexToRgb } from "assets/jss/material-kit-pro-react.js";
// import Info from "components/Typography/Info.js";
import Button from "../../../components/CustomButtons/Button";
import hireUsStyle from "../../../assets/jss/material-kit-pro-react/views/hireUsStyle";
// const style = {
//   ...imagesStyles,
//   ...cardsStyle,
//   cardTitle
// };

const useStyles = makeStyles(hireUsStyle);

export default function SectionHeardEnough() {
  const classes = useStyles();
  return (
    <div >
      {/*<div className={classes.interjection}>*/}
      {/*<h2>Excited yet? We are!</h2>*/}
      {/*</div>*/}
      <Card blog>
        <CardHeader image>
          <div className={"vignette"}>
        <img
          src={makeCloudinaryUrl(
            "q_auto:best,f_auto,c_fill,g_face,w_2000/v1614277500/Photos/classroom/UnclearPermissions_ReplaceWhenPossible/classroom_w_laptops_HMMS_g7_uem7hc.jpg"
          )}
          alt="A diverse classroom of seventh graders working at laptops."

        />


        </div>
          <div className={classes.imgCardOverlay}>
            <h4
              className={classes.cardTitle}
              style={{
                color: "white",
                position: "absolute",
                // zIndex: "4",
                background: "rgba("+hexToRgb(roseColor[0])+",0.9)",
                bottom: "10px",
                left: "15px"
              }}
            >
              &nbsp;Ready to change lives?&nbsp;
            </h4>
          </div>

        </CardHeader>
        <CardBody>
          {/*<Info>*/}
          {/*  <h6 className={classes.cardCategory}>Let's work together!</h6>*/}
          {/*</Info>*/}
          <h3>
            Whether you have funding or want to write us into a grant, we{"\'"}re ready to work with you!
          </h3>
          <div className={"getStarted"}
          style={{paddingTop: "1rem",
                  justifyContent: "center",
                  display: "flex"}}>
          <Button
            href="https://portal.galacticpolymath.com/public/form/view/604d904c80fecb0cd51e2529" color="rose" round
          style={{alignText: "center"}}
          >
            Let{"\'"}s Get Started!
          </Button>
          </div>
        </CardBody>
      </Card>
    </div>

);
}
