import { container } from "assets/jss/material-kit-pro-react.js";

const lessonPlanStyle = {
  container: {
    ...container,
    "@media (min-width: 1200px)": null,
  },
  LessonPlan: {
    "padding-top": "70px",
  },
  centered: {
    textAlign: "center",
  },
  SectionPills: {
    paddingTop: "60px",
    fontSize: 1,
  },
  LessonCategories: {
    fontSize: "11pt",
  },
};
export default lessonPlanStyle;
