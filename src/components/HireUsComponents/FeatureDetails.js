import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import featureDetailStyle from "assets/jss/material-kit-pro-react/components/featureDetailsStyle.js";

const useStyles = makeStyles(featureDetailStyle);

export default function FeatureDetails(props) {
  const { id,keyPhrase1, keyPhrase2,  description } = props;/*iconColor, className,*/
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
      <h3 className={classes.featureDeets} id={id}>
        <span>
        <b className={classes.keyPhrase1}>{keyPhrase1}&nbsp;</b>
        <span className={classes.keyPhrase2}>{keyPhrase2}&nbsp;</span>
        <span className={classes.description}>{description}</span>
        </span>
      </h3>
      );
}

// HireUsComponents.defaultProps = {
//   // color: "primary"
// };

// HireUsComponents.propTypes = {
//   icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.node.isRequired,
//   iconColor: PropTypes.oneOf([
//     "primary",
//     "warning",
//     "danger",
//     "success",
//     "info",
//     "rose",
//     "gray"
//   ]),
//   vertical: PropTypes.bool,
//   className: PropTypes.string
// };
