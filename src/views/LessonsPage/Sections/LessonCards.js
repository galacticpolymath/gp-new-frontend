import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Badge from "components/Badge/Badge";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import Image from "components/StrapiImage";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(blogPostsPageStyle);

const LessonCards = ({ lessons }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ padding: "40px 0" }}>
      <GridContainer>
        {lessons.map(({ id, CoverImage, Title, Subtitle, Section }) => (
          <GridItem key={id} xs={12} sm={6} md={6}>
            <Link to={"/lessons/" + id}>
              <Box className={classes.card} boxShadow={4}>
                <Image {...CoverImage} />
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${CoverImage.url})`,
                    opacity: "1",
                  }}
                />
                <CardBody>
                  <h4>
                    <Link to={"/lessons/" + id}>{Title}</Link>
                  </h4>
                  <p>{Subtitle}</p>
                  <Badge color="primary">{Section[0].TargetSubject}</Badge>
                </CardBody>
              </Box>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
};

LessonCards.propTypes = {
  lessons: PropTypes.array,
};

export default LessonCards;
