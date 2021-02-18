import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.js";
import Image from "components/Image";
import { Link } from "react-router-dom";

const useStyles = makeStyles(blogPostsPageStyle);

const LessonCards = ({ lessons }) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ padding: "40px 0" }}>
      <GridContainer>
        {lessons.map(({ id, CoverImage, Title, Description }) => (
          <GridItem key={id} xs={12} sm={6} md={6}>
            <Card blog>
              <CardHeader image>
                <Link to={"/lessons/" + id}>
                  <Image {...CoverImage} />
                </Link>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${CoverImage.url})`,
                    opacity: "1",
                  }}
                />
              </CardHeader>
              <CardBody>
                <h4>
                  <Link to={"/lessons/" + id}>{Title}</Link>
                </h4>
                <p>{Description}</p>
              </CardBody>
            </Card>
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
