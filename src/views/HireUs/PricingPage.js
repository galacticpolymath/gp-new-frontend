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
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionPricing from "views/HireUs/Sections/SectionPricing.js";
import SectionFeatures from "views/HireUs/Sections/SectionFeatures.js";

import pricingStyle from "assets/jss/material-kit-pro-react/views/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
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
          height: 200,
          color: "dark",
        }}
      />

      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer
          style={{placeItems: "center"}}
          >
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
              // style={{ paddingTop: "3%"}}
            >
              <h1 className={classes.title}>Achieving Real, Lasting Impact</h1>
              <h4
                className={classes.title}
                style={{ letterSpacing: "1.5px", fontWeight: 500 }}
              >
                Whether you are an NSF-funded researcher, a nonprofit, or a
                socially responsible company, you care about a body of knowledge
                and you want the public to understand and care about it, too.
              </h4>
            </GridItem>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(
                classes.hideLogo,
                classes.mlAuto,
                classes.mrAuto
              )}
              style={{ height: "130%", width: "100%"}}
            >
              <img
                src={require("assets/img/hero-images/PricingPage-dot-pattern-01.svg")}

              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          <SectionFeatures />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-pricing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"
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
                    href="https://www.creative-tim.com/license?ref=mkpr-pricing"
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
                href="https://www.creative-tim.com?ref=mkpr-pricing"
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