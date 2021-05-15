import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

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
      <RichText className="tldr" content={StepQuickDescription} />
      <RichText content={StepDetails} />
      {Vocab && (
        <Box className={classes.card + " vocab"} boxShadow={3}>
          <h6>Vocab</h6>
          <RichText content={Vocab} />
        </Box>
      )}
      {VariantNotes && (
        <div className="iconNote">
          <QuestionAnswerIcon className="bulletIcon" />
          <RichText content={VariantNotes} />
        </div>
      )}
      {TeachingTips && (
        <div className="iconNote">
          <EmojiObjectsIcon className="bulletIcon" />
          <RichText content={TeachingTips} />
        </div>
      )}
    </div>
  );
};
export default LessonStep;
