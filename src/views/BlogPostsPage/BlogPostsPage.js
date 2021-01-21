/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "./Sections/SectionPills.js";
import SectionInterested from "./Sections/SectionInterested.js";
import SectionImage from "./Sections/SectionImage.js";
import SubscribeLine from "./Sections/SubscribeLine.js";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";

const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classes.textCenter}
              style={{ paddingTop: "5%", paddingRight: "25px" }}
            >
              <h2 className={classes.title}>Galactic Lessons</h2>
              <h4 className={classes.title}>
                Galactic Polymath (GP) is a startup education studio that works
                on behalf of scientists, nonprofits, and sustainable companies
                with outreach needs to translate complicated, cutting-edge
                knowledge into mind-blowing lessons for grades 5+.
              </h4>
            </GridItem>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <img
                src={require("assets/img/hero-images/Lessons_VerticalDotandline.svg")}
                height="auto"
                width="120%"
              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionPills />
          <SectionInterested />
        </div>
        <SectionImage />
        <SubscribeLine />
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-blog-posts"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-blog-posts"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-blog-posts"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-blog-posts"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
