/*eslint-disable*/
import React from "react";
import Observer from "react-intersection-observer";
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
import SectionBenefitsOfGP from "./Sections/SectionBenefitsOfGP";
import SectionPricing from "views/HireUs/Sections/SectionPricing.js";
import SectionAddOns from "views/HireUs/Sections/SectionAddOns.js";
import SectionFeatures from "views/HireUs/Sections/SectionFeatures.js";

//styles broad material UI components
import hireUsStyle from "../../assets/jss/material-kit-pro-react/views/hireUsStyle";
import SectionHeardEnough from "./Sections/SectionHeardEnough";
import Button from "../../components/CustomButtons/Button";

//for scroll dots
import "../../components/NavDots/Dots.css";
import DotPanel from "../../components/NavDots/DotPanel";
import { renderMetaTags } from "utils/meta";

const useStyles = makeStyles(hireUsStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  function handleIntersection(e, entry) {
    if (e === true) {
      const activeNode = document.querySelector(
        `.${entry.target.firstChild.id}`
      );
      activeNode.classList.add("activeDot");
    } else {
      const activeNode = document.querySelector(
        `.${entry.target.firstChild.id}`
      );
      activeNode.classList.remove("activeDot");
    }
  }

  const options = {
    onChange: handleIntersection,
    root: null,
    rootMargin: "-100px",
  };

  return (
    <div>
      {renderMetaTags(
        'Hire Us',
        "Achieve easier outreach, with better results! We can level up your organization's outreach efforts, while reducing your own workload. Writing us into grants can help proposals be more competitive. You can also help reduce inequality by translating a complex body of knowledge you care about into free lessons that help create a more engaged and informed public.",
      )}
    
      <Header
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
      />

      <Parallax className={classes.bgColor} small>
        <div className={classes.container}>
          <GridContainer style={{ placeItems: "center" }}>
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
            >
              <h1 className={classNames(classes.whiteTitle, "hireUsTitle")}>
                Achieving Real, Lasting Impact
              </h1>
              <h4
                className={classes.whiteTitle}
                style={{ fontWeight: 500, marginBottom: "0.5rem" }}
              >
                Whether you are an NSF-funded researcher, a nonprofit, or a
                socially responsible company, you care about a body of knowledge
                and you want the public to understand and care about it, too.
              </h4>
              <a
                href="https://portal.galacticpolymath.com/public/form/view/604d904c80fecb0cd51e2529"
                color="primary"
                style={{ color: "white", textDecoration: "underline" }}
              >
                <b>LET{"'"}S GET STARTED!</b>
              </a>
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

      {/*Beginning of main card, extending for most of the page*/}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Observer {...options}>
            <div className="scroll-indicator" id="section01"></div>
            <SectionBenefitsOfGP />
          </Observer>
        </div>
        <div className={classes.interjection}>
          <h3 style={{ textAlign: "left", marginBottom: 0 }}>
            {/*could not get this style to work in pricingStyle*/}
            Contracting us means having a fully-dedicated team of scientists,
            educators, and creatives working to achieve your outreach dreams!
          </h3>
        </div>
        <div className={classes.container}>
          <Observer {...options}>
            <div className="scroll-indicator" id="section02"></div>

            {/*Price List */}
            <SectionPricing />
          </Observer>

          {/*Add on Section Appeal Banner*/}
        </div>
        {/*Break container to add interjection section at full width*/}

        <div className={classes.interjection}>
          <h3>
            Order <span style={{ fontStyle: "italic" }}>a la carte</span>
          </h3>
          <h4> Looking for a fantastic infographic, video, or data visual?</h4>
          <h4>
            We're your one-stop shop for scicomm, education, and outreach!
          </h4>
          <h4>
            <em>
              Even if your exact need isn't listed, we can likely make it
              happen!
            </em>
          </h4>
          <Button
            href="https://portal.galacticpolymath.com/public/form/view/604d904c80fecb0cd51e2529"
            color="primary"
            round
            style={{ alignText: "center" }}
          >
            Let{"'"}s Get Started!
          </Button>
        </div>

        {/*restart container*/}
        <div className={classes.container}>
          <Observer {...options}>
            <div className={"scroll-indicator"} id="section03"></div>

            <SectionAddOns />
          </Observer>
          {/*GP Logo*/}

          <div className={classNames(classes.container, classes.textCenter)}>
            <img
              src={process.env.PUBLIC_URL + "/GP_bubbleLogo300px.png"}
              className={classNames(classes.mlAuto, classes.mrAuto)}
              style={{
                width: "25vw",
                maxWidth: "200px",
                justifySelf: "center",
                paddingTop: "10%",
              }}
              alt={
                "The Galactic Polymath logo. A starburst of lines and dots, in blue, purple and pink."
              }
            />
            <h2 className={classes.title}>The Galactic Polymath Way</h2>
            <h2 className={classes.subtitle}>A New Model for Education</h2>
          </div>
          <Observer {...options}>
            <div className="scroll-indicator" id="section04"></div>
            <SectionFeatures />
          </Observer>
        </div>
        {/*Break the container class to add interjection*/}
        <div className={classes.interjection}>
          <h2>Excited yet? We are!</h2>
        </div>
        {/*Restart container*/}
        <div className={classes.container}>
          <Observer {...options}>
            <div className="scroll-indicator" id="section05"></div>
            <SectionHeardEnough />
          </Observer>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <DotPanel />
    </div>
  );
}
