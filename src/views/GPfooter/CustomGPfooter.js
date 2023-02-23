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
          <Footer
            theme="white"
            className={classes.footerContainer}
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
                    <h5>Galactic Polymath</h5>
                  <p>
                    We translate current research into creative
                    interdisciplinary lessons for grades 5+ that are{" "}
                    <i>free for everyone</i>.
                  </p>

                  <div className={classes.followUs}>
                    <p>Follow Us:</p>

                  <ul className={classes.socialButtons}>
                    <span className={classes.bracket}>[</span>
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
                    <span className={classes.bracket}>]</span>
                  </ul>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={2} md={2}>
                  <h5 className={classes.centered}>Contact</h5>
                  <div className={classes.centered}>
                  <Button
                    justIcon
                    simple
                    color="primary"
                    href="mailto:info@galacticpolymath.com"
                  >
                    <MailOutlineIcon />
                  </Button>
                  </div>


                </GridItem>
                <GridItem xs={12} sm={3} md={3}>
                  <h5>Navigation</h5>
                  <ul className={classes.linksVertical}>
                    <li>
                      <a href="/lessons">• Lessons</a>
                    </li>
                    <li>
                      <a href="/jobviz">• JobViz</a>
                    </li>
                    <li>
                      <a href="/hire-us">• Hire Us</a>
                    </li>
                    <li>
                      <a href="/about">• About</a>
                    </li>
                    <li>
                      <a href="/">• Home</a>
                    </li>
                  </ul>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <h5>Join Our Mailing List</h5>
                  <p>
                    Get updates and early access to our latest free lessons and
                    learning tools.
                  </p>
                  <div >
                    <Button
                      color="rose"
                      size="lg"
                      href="https://45216c4d.sibforms.com/serve/MUIEABKhQZtQBEauhcYKU3l3n-hkpWQzrO5xzjvf6yI0XwqVvF1MuYlACX2EVtDFWcm1w1nY6lw181I_CUGs3cYjltIR-qTgWYRKLH-zF1Ef_NONTcKn5KiY3iLDyW1Klex1c_dKo2S66mUXo6codlinm0zDopzcmgkU3wW1Wyp-T1L61TZcGWlE49DKcYAszOJj6AKW3MTxs5Q0"
                      className={classNames(classes.subscribeButton)}
                    >
                      <div className={classes.verticallyCentered}>
                      <MailOutlineIcon  className={classes.mailIcon}/>

                      Subscribe
                      </div>
                    </Button>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Footer>

  );
}
