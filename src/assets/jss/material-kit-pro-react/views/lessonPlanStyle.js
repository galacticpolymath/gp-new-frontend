import { container } from "assets/jss/material-kit-pro-react.js";

const lessonPlanStyle = {
  container: {
    ...container,
    "@media (min-width: 1200px)": null
  },
  LessonPlan: {
    "padding-top": "70px",
  },
  centered: {
    textAlign: "center"
  },
  SectionPills: {
    paddingTop: "60px",
    fontSize: 1
  },
  LessonCategories: {
    fontSize: "11pt"
  },
  inlineIcon: {
    verticalAlign: "sub"
  },
  quickPrep:{
    maxWidth: "250px",
    margin: "0 auto",
    "& ol":{
      paddingLeft: "30px"
    },
    "& li": {
      paddingBottom: "0.5rem"
    }

  },
  procLessonPreface:{
    background: "#F4F4F4",
    contentFit: "contain",
    padding: "1rem",
    margin: 0,
    "& h4":{
      padding: 0,
      marginTop: 0,
    },
    "& p":{
      margin: 0
    }

  }
};
export default lessonPlanStyle;
