/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import SectionPricing from "views/HireUs/Sections/SectionPricing.js";
import SectionAddOns from "views/HireUs/Sections/SectionAddOns.js";
import SectionFeatures from "views/HireUs/Sections/SectionFeatures.js";
import GPcopyrightFooter from "../../components/Footer/GPcopyrightFooter";

//styles broad material UI components
import hireUsStyle from "../../assets/jss/material-kit-pro-react/views/hireUsStyle";


const useStyles = makeStyles(hireUsStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "dark"
        }}
      />

      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer
            style={{ placeItems: "center" }}
          >
            <GridItem
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textLeft
              )}
              // style={{ paddingTop: "3%"}}
            >
              <h1 className={classNames(classes.title, "hireUsTitle")}>Achieving Real, Lasting Impact</h1>
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
              sm={12}
              md={6}
              lg={6}
              className={classNames(
                classes.hideLogo,
                classes.mlAuto,
                classes.mrAuto
              )}

            >
              <img
                src={require("assets/img/hero-images/HireUs_hero.png")}
                alt={"geometric background pattern"}
                height="auto"
                width="120%"
                style={{ float: "left" }}

              />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          <h2>Order <i>a la carte</i>. Do you just need a fantastic infographic, video, or data visual? We're your
            one-stop shop for scicomm, education, and outreach! Even if your exact need isn't listed, we can likely make
            it happen. <a>Start the conversation!</a></h2>
          <hr />
          <SectionAddOns />
          <SectionFeatures />
        </div>
      </div>
      <Footer
        content={
          <div>
            {/*<div className={classes.left}>*/}
            {/*  <List className={classes.list}>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Creative Tim*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*    <ListItem className={classes.inlineBlock}>*/}
            {/*      <a*/}
            {/*        href="https://www.creative-tim.com/presentation?ref=mkpr-pricing"*/}
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
            {/*        href="https://www.creative-tim.com/license?ref=mkpr-pricing"*/}
            {/*        target="_blank"*/}
            {/*        className={classes.block}*/}
            {/*      >*/}
            {/*        Licenses*/}
            {/*      </a>*/}
            {/*    </ListItem>*/}
            {/*  </List>*/}
            {/*</div>*/}
            <GPcopyrightFooter />
          </div>
        }
      />
    </div>
  );
}
