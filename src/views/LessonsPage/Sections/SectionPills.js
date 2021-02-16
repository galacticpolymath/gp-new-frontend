import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import lessonPlanStyle from "assets/jss/material-kit-pro-react/views/lessonPlanStyle.js";
const useStyles = makeStyles(lessonPlanStyle);

export default function SectionPills() {
  const [activeCategory, activateCategory] = useState(0);
  const classes = useStyles();

  const tabs = [
    { Id: 0, Label: "All" },
    { Id: 1, Label: "Math" },
    { Id: 2, Label: "ELA" },
    { Id: 3, Label: "Science" },
    { Id: 4, Label: "Social studies" },
  ];

  return (
    <div className={classes.SectionPills}>
      <GridContainer justify="center">
        <GridItem xs={12} className={classes.centered}>
          {tabs.map(({ Id, Label }) => (
            <Button
              className={classes.LessonCategories}
              key={Id}
              onClick={() => activateCategory(Id)}
              color="primary"
              round
              simple={activeCategory !== Id}
            >
              {Label}
            </Button>
          ))}
        </GridItem>
      </GridContainer>
    </div>
  );
}
