import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Badge from "components/Badge/Badge";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Button from "../../../components/CustomButtons/Button";
import classNames from "classnames"
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ComingSoon from "assets/img/comingSoon.jpg"

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
        {lessons.map(({ id, CoverImage, Title, Subtitle, Section }, index) => (
          <GridItem key={index} xs={12} sm={6} md={6}>
            <Link to={"/lessons/" + id} className={classes.link}>
              <Box className={classNames(classes.card,classes.lessonCard)} boxShadow={4}>
                <Image {...CoverImage} />
                <CardBody className={classes.noLeftPad}>
                  <h4 className={classes.noUnderline}>
                    {Title}
                  </h4>
                  <p>{Subtitle}</p>
                  <Badge color="primary">{Section.overview.TargetSubject}</Badge>
                  <Badge color="gray">{Section.overview.GradesOrYears+": "+Section.overview.ForGrades}</Badge>
                </CardBody>
              </Box>
            </Link>
          </GridItem>
        ))}
        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        {/*Manual coming soon tile*/}
        {/* <GridItem xs={12} sm={6} md={6} >
          <div className= {classes.addMargin}>
            <Box className={classes.lessonCard} boxShadow={4}>
              <div style={{
                zIndex:5,
                position:"absolute",
                top:"3%",
                right:"6%",
                fontSize: "2rem",
                verticalAlign:"top",
                textAlign:"right",
                lineHeight: "2rem",
                fontWeight: 500,
                textShadow: "0px 0px 5px white, 0px 0px 10px white"
              }}>
                Coming Soon!
              </div>
              <img
                className="Image"
                alt={"Coming Soon lesson graphic"}
                src={ComingSoon}
              />
              <div
              />
              <CardBody className={classes.noLeftPad}>
                <h4>
                  
                  I Like That!
                </h4>
                <p>How perception, emotion, and cognition shape our preferences
</p>
                <br />
                <Badge color={"primary"}>Science</Badge>
              </CardBody>
            </Box>

              <GridContainer className={classNames(classes.subscribeFooter)}>
                <GridItem  md={12} lg={5}>
                <Button
                  color="info"
                  size="lg"
                  href="https://galacticpolymath.us8.list-manage.com/subscribe?u=42413c3d307f9b69fd5d5319e&id=33924ebd91"
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
          </div>
        </GridItem> */}

      </GridContainer>
    </div>
  );
};

LessonCards.propTypes = {
  lessons: PropTypes.array
};

export default LessonCards;
