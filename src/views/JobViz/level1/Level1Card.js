import React from "react";
import { makeUrlPath } from "../Helper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import { cardTitle } from "assets/jss/material-kit-pro-react.js";

const style = {
  cardTitle,
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
};

const useStyles = makeStyles(style);

export const Level1Card = (props) => {
  const classes = useStyles();
  const job = props.job;
  const parent = job.parent[0];
  const jobId = job.id;
  const title = makeUrlPath(job.title);

  return (
    <>
      <Card className={classes.textCenter} style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>{job.title}</h4>

          <Button
            onClick={() => {
              props.history.push(`/jobviz/${parent}/${jobId}/${title}`);
            }}
            color="primary"
          >
            {" "}
            Select
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
