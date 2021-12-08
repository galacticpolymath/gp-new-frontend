import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Badge from "components/Badge/Badge";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import classNames from "classnames";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import Image from "components/StrapiImage";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import Button from "../../../components/CustomButtons/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles(blogPostsPageStyle);

const LessonCards = ({ lessons }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ padding: "40px 0" }}>
      <GridContainer >
        {lessons.map(({ id, CoverImage, Title, Subtitle, Section }) => (
          <GridItem key={id} xs={12} sm={6} md={6}>
            <Link to={"/lessons/" + id}>
              <Box className={classes.card} boxShadow={4}>
                <Image {...CoverImage} />
                <CardBody>
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
            <Box className={classNames(classes.card,classes.addMargin)} boxShadow={4}>
              <img
                className="Image"
                alt={"Coming Soon lesson graphic. A drawn cougar stands over a graph and a city map."}
                src={"https://res.cloudinary.com/galactic-polymath/image/upload/v1628365236/lesson_misc_share/geneticRescue_lesson-banner_exphsn.png"} />
              <div
                className={classes.coloredShadow}
                style={{
                  opacity: "1"
                }}
              />
              <CardBody>
                <h4>
                  {/*<Link to={"/lessons/" + id}>{Title}</Link>*/}
                  Genetic Rescue to the Rescue
                </h4>
                <p>Preventing extinction through gene flow</p>
                <br />
                <Badge color={"rose"}>Science</Badge>
              </CardBody>
            </Box>

              <GridContainer className={classNames(classes.subscribeFooter)}>
                <GridItem  sm={12} md={6}>
                <Button
                  color="primary"
                  size="lg"
                  href="https://eepurl.com/g_kQ4T"
                  className={classNames(classes.button)}
                >
                  <MailOutlineIcon style={{ marginRight: "0.75rem" }} />
                  Subscribe
                </Button>
                </GridItem>
                <GridItem  sm={12} md={6}>
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
