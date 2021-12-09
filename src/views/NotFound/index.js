import React from 'react'
import { Container } from "@material-ui/core";
import { Helmet } from 'react-helmet';

import { renderMetaTags } from 'utils/meta';
import HeaderLinks from 'components/Header/HeaderLinks';
import Header from 'components/Header/Header';

const NotFound = () => {
  return (
    <Container style={{textAlign: "center", padding:"20% 0 0"}}>
      <Helmet>
        {renderMetaTags({
          title: "404 Page not found",
          description: 'This page couldn\'t be found.',
        })}
      </Helmet>
      
      <Header
        brand="Galactic Polymath"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 50,
          color: "dark",
        }}
      />
      <h2>This page couldn&apos;t be found.</h2>
      <h4><a href="/">&larr; Back to the homepage</a></h4>
    </Container>
  )
}

export default NotFound