import { container } from "assets/jss/material-kit-pro-react.js";

const lessonPlanStyle = {
  acknowledgment:{
    fontWeight: 500,
    "& p":{
      paddingLeft: "1rem"
    }
  },
  container: {
    ...container,
    "@media (min-width: 1200px)": null
  },
  LessonPlan: {
    "padding-top": "70px",
  },
  learningChartFootnote: {
    display: "block",
    "& p":{
      marginBottom: "0.25rem"
    }
  },
  learningChartDetails :{
    display: "block"
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
    marginTop: "1rem",
    marginBottom: "2rem",
    maxWidth: "400px",
    padding: "1rem 2rem 0.5rem",
  border: "rgba(245,245,245,1) 1px solid",
  boxShadow:   "inset 3px 2px 26px 20px rgba(153, 157, 168,0.1)," +
    "inset 0px 0px 15px 8px rgba(240, 244, 255, 1)," +
    "0 3px 5px rgba(245, 245, 245, 0.2)," +
    "0 3px 4px rgba(0, 0, 0, 0.2)",
  background: "white",
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
