import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle";

import GPcopyrightFooter from "components/Footer/GPcopyrightFooter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles(style);

export default function CustomGPfooter() {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.section}>
        <div>
          <br />
          <Footer
            theme="white"
            content={
              <div>
                <div
                  className={classNames(classes.pullCenter, classes.copyRight)}
                >
                  <GPcopyrightFooter />
                </div>
              </div>
            }
          >
            <div className={classes.footer}>
              <GridContainer>
                <GridItem xs={12} sm={3} md={3}>
                  <a href="/">
                    {/* <div className={classes.hideLogo}>
                    <img alt="logo" src={GpImage} width="250px" />
                    <meta charSet="utf-8" />
                  </div> */}
                    <h5>Galactic Polymath</h5>
                  </a>
                  {/* <br /> */}
                  <p>
                    We translate current research into creative
                    interdisciplinary lessons for grades 5+ that are{" "}
                    <i>free for everyone</i>.
                  </p>
                  <ul className={classes.socialButtons}>
                    <li>
                      <Button
                        justIcon
                        simple
                        href="https://twitter.com/galacticPM"
                        color="twitter"
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        justIcon
                        simple
                        href="https://vimeo.com/galacticpolymath"
                        color="facebook"
                      >
                        <i className="fab fa-vimeo-v" />
                      </Button>
                    </li>
                    <li>
                      <Button
                        justIcon
                        simple
                        href="https://youtube.com/channel/UCfyBNvN3CH4uWmwOCQVhmhg"
                        color="youtube"
                      >
                        <i className="fab fa-youtube" />
                      </Button>
                    </li>
                  </ul>
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <h5>Contact</h5>
                  <ul className={classes.linksVertical}>
                    <a href="mailto:info@galacticpolymath.com" style={{ color: "#363636 important!",paddingLeft: "1rem" }}>
                    <MailOutlineIcon />
                    </a>
                  </ul>
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <h5>Navigation</h5>
                  <ul className={classes.linksVertical}>
                    <li>
                      <a href="/lessons">LESSONS</a>
                    </li>
                    <li>
                      <a href="/jobviz">JOBVIZ</a>
                    </li>
                    <li>
                      <a href="/hire-us">HIRE US</a>
                    </li>
                    <li>
                      <a href="/about">ABOUT</a>
                    </li>
                    <li>
                      <a href="/">HOME</a>
                    </li>
                  </ul>
                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <h5>Join Our Mailing List</h5>
                  <p>
                    Get updates and early access to our latest free lessons and
                    learning tools.
                  </p>
                  <form>
                    <Button
                      color="primary"
                      size="lg"
                      href="https://eepurl.com/g_kQ4T"
                      className={classNames(classes.button)}
                    >
                      <MailOutlineIcon style={{ marginRight: "0.75rem" }} />
                      Subscribe
                    </Button>
                  </form>
                </GridItem>
              </GridContainer>
            </div>
          </Footer>
        </div>
      </div>
    </footer>
  );
}
