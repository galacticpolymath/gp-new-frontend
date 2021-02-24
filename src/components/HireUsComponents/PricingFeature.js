import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// nodejs library that concatenates classes
// import classNames from "classnames";
import AnchorLink from "react-anchor-link-smooth-scroll";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/hireUsSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingFeature(props) {
  const { boldedLabel, description, linkTarget, scrollOffset, minHeight } = props;
  const classes = useStyles();
  // const iconWrapper = classNames({
  //   [classes.iconWrapper]: true,
  //   [classes[iconColor]]: true,
  //   [classes.iconWrapperVertical]: vertical
  // });
  // const iconClasses = classNames({
  //   [classes.icon]: true,
  //   [classes.iconVertical]: vertical
  // });
  // const infoAreaClasses = classNames({
  //   [classes.infoArea]: true,
  //   [className]: className !== undefined
  // });
  // let icon = null;
  // switch (typeof props.icon) {
  //   case "string":
  //     icon = <Icon className={iconClasses}>{props.icon}</Icon>;
  //     break;
  //   default:
  //     icon = <props.icon className={iconClasses} />;
  //     break;
  // }
  return (
    <li className={classes.pfContainer}
        style={{
          minHeight: props.minHeight
        }}
      // borderBottom: "1px solid rgba("+hexToRgb(props.bottomBorderCol)+"0.6"}}
    >
      <AnchorLink
        href={linkTarget}
        offset={scrollOffset}
        className={classes.pfLink}>
        <div className={classes.gridCont}>
          <div className={classes.pfTXT}>
            <h4><b className={classes.boldedLabel}>{boldedLabel}&nbsp;</b>
            </h4>
          </div>
          <div className={classes.pfDescription}>
            <h4>{description}</h4>
          </div>
        </div>

      </AnchorLink>
    </li>

  );

}

PricingFeature.defaultProps = {
  scrollOffset: "125px",
  minHeight: "0"
};


// {/*// HireUsComponents.propTypes = {*/}
// {/*//   icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,*/}
// {/*//   title: PropTypes.string.isRequired,*/}
// {/*//   description: PropTypes.node.isRequired,*/}
// {/*//   iconColor: PropTypes.oneOf([*/}
// {/*//     "primary",*/}
// {/*//     "warning",*/}
// {/*//     "danger",*/}
// {/*//     "success",*/}
// {/*//     "info",*/}
// {/*//     "rose",*/}
// {/*//     "gray"*/}
// {/*//   ]),*/}
// {/*//   vertical: PropTypes.bool,*/}
// {/*//   className: PropTypes.string*/}
// {/*// };*/}
