import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Badge from "components/Badge/Badge";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button";
import classNames from "classnames"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ComingSoon from "assets/img/comingSoon.png"

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import Image from "components/StrapiImage";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";


const useStyles = makeStyles(blogPostsPageStyle);

const LessonCards = ({ lessons }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ padding: "40px 0" }}>
      <GridContainer className={classes.matrix}>
        {lessons.map(({ id, CoverImage, Title, Subtitle, Section }) => (
          <GridItem key={id} xs={12} sm={6} md={6}>
            <Link to={"/lessons/" + id}>
              <Box className={classNames(classes.card,classes.lessonCard)} boxShadow={4}>
                <Image {...CoverImage} />
                <CardBody className={classes.noLeftPad}>
                  <h4>
                    {Title}
                  </h4>
                  <p>{Subtitle}</p>
                  <Badge color="primary">{Section[0].TargetSubject}</Badge>
                </CardBody>
              </Box>
            </Link>
          </GridItem>
        ))}
        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        {/*Manual coming soon tile*/}
        <GridItem xs={12} sm={6} md={6} >
          {/*<Link to={"/lessons/" + id}>*/}
          <div className= {classes.addMargin}>
            <Box className={classes.lessonCard} boxShadow={4}>
              <img
                className="Image"
                alt={"Coming Soon lesson graphic"}
                src={ComingSoon}
              />
              <div
                className={classes.coloredShadow}
                style={{
                  opacity: "1"
                }}
              />
              <CardBody className={classes.noLeftPad}>
                <h4>
                  {/*<Link to={"/lessons/" + id}>{Title}</Link>*/}
                  The Guardian Frogs of Borneo
                </h4>
                <p>Why Exceptions Matter in Biology and Everyday Life</p>
                <br />
                <Badge color={"primary"}>Science</Badge>
              </CardBody>
            </Box>

              <GridContainer className={classNames(classes.subscribeFooter)}>
                <GridItem  md={12} lg={5}>
                <Button
                  color="info"
                  size="lg"
                  href="https://eepurl.com/g_kQ4T"
                  className={classes.button}
                >
                  <MailOutlineIcon style={{ marginRight: "0.75rem" }} />
                  Subscribe
                </Button>
                </GridItem>
                <GridItem  md={12} lg={7}>
                  <div className={classes.subscribeAppeal}>
                  Be the first to hear when this lesson is released!
                  </div>
                </GridItem>
              </GridContainer>



            {/*</Link>*/}
          </div>
        </GridItem>

      </GridContainer>
    </div>
  );
};

LessonCards.propTypes = {
  lessons: PropTypes.array
};

export default LessonCards;
