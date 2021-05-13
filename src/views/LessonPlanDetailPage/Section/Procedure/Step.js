import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import RichText from "components/RichText";
import Badge from "components/Badge/Badge";

const useStyles = makeStyles(blogPostsPageStyle);

const LessonStep = ({
  Step,
  Vocab,
  StepTitle,
  StepDetails,
  TeachingTips,
  VariantNotes,
  StepQuickDescription,
}) => {
  const classes = useStyles();
  return (
    <div className="LessonStep">
      <Badge className="step">{Step}</Badge>
      <h5>{StepTitle}</h5>
      <RichText content={StepQuickDescription} />
      {Vocab && (
        <Box className={classes.card + " vocab"} boxShadow={3}>
          <h6>Vocab</h6>
          <RichText content={Vocab} />
        </Box>
      )}
    </div>
  );
};
export default LessonStep;
