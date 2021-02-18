import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function ExampleOptionalSizes() {
  const [smallModal, setSmallModal] = React.useState(false);
  const [largeModal, setLargeModal] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <Button color="primary" onClick={() => setLargeModal(true)}>
        Large Modal
      </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal + " " + classes.modalLarge,
        }}
        open={largeModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLargeModal(false)}
        aria-labelledby="large-modal-slide-title"
        aria-describedby="large-modal-slide-description"
      >
        <DialogTitle
          id="large-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setLargeModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Large modal</h4>
        </DialogTitle>
        <DialogContent
          id="large-modal-slide-description"
          className={classes.modalBody}
        >
          <p>...</p>
        </DialogContent>
      </Dialog>

      <Button color="primary" onClick={() => setSmallModal(true)}>
        Small Modal
      </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal + " " + classes.modalSmall,
        }}
        open={smallModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setSmallModal(false)}
        aria-labelledby="small-modal-slide-title"
        aria-describedby="small-modal-slide-description"
      >
        <DialogTitle
          id="small-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setSmallModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Small modal</h4>
        </DialogTitle>
        <DialogContent
          id="small-modal-slide-description"
          className={classes.modalBody + " " + classes.modalSmallBody}
        >
          <p>...</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
