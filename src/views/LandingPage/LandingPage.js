import React from "react";
import { Helmet } from "react-helmet";
// nodejs library to set properties for components
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import BlurOn from "@material-ui/icons/BlurOn";
import CreateIcon from "@material-ui/icons/Create";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
// import SectionProduct from "./Sections/SectionProduct.js";
// import SectionTeam from "./Sections/SectionTeam.js";
// import SectionWork from "./Sections/SectionWork.js";
import SectionAbout from "./Sections/SectionAbout.js";
import SectionLessons from "./Sections/SectionLessons.js";
import SectionHow from "./Sections/SectionHow.js";
import SectionLessonData from "./Sections/SectionLessonData.js";
import SectionContact from "./Sections/SectionContact.js";

import GPcopyrightFooter from "../../components/Footer/GPcopyrightFooter";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "#470F2C" }}>
      <Helmet>
        <meta
          name="description"
          content="We are an education studio. We translate current research into creative, interdisciplinary lessons for grades 5+ that are free for everyone."
        />
      </Helmet>
      <Header
        color="transparent"
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/hero-images/landingPage-CityNetwork@75x-20.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <div>
                <h1 className={classes.title}>
                  We are an <br /> education studio.
                </h1>
                <h4
                  style={{
                    backgroundColor: "rgba(71, 15, 44, 0.7)",
                  }}
                >
                  We translate current research into creative, interdisciplinary
                  lessons for grades 5+ that are <em>free for everyone.</em>
                </h4>
              </div>
              <br />
              <Button
                color="primary"
                size="lg"
                href="/lessons/"
                padding="100px"
              >
                <CreateIcon />
                Get Lessons
              </Button>
              <Button color="primary" size="lg" href="/hire-us/">
                <BlurOn />
                Do Outreach
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionAbout />
        </div>
        <SectionLessons />
        <div className={classes.container}>
          <SectionHow />
        </div>
        <SectionLessonData />
        <div className={classes.container}>
          <SectionContact />
          {/* <SectionProduct />
          <SectionTeam />
          <SectionWork /> */}
        </div>
      </div>
      <Footer
        theme={"transparent"}
        content={
          <div>
            {/*<div className={classes.left}>*/}
            {/*  <List className={classes.list}>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/?ref=mkpr-landing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Creative Tim*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/presentation?ref=mkpr-landing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        About us*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a href="//blog.creative-tim.com/" className={classes.block}>*/}
            {/*        Blog*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/license?ref=mkpr-landing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Licenses*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*  </List>*/}
            {/*</div>*/}

            <div style={{ color: "white", opacity: ".7" }}>
              <GPcopyrightFooter />
            </div>
          </div>
        }
      />
    </div>
  );
}
