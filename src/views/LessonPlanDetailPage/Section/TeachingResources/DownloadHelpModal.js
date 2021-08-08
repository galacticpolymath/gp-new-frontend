import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

import Button from "components/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Close from "@material-ui/icons/Close";

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const DownloadHelpModal = () => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  return (
    <div className='DownloadHelpModal'>
      <span onClick={() => setShowModal(true)}>
        <HelpOutlineIcon />
      </span>
      {showModal && <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={showModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setShowModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setShowModal(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>Modal title</h4>
        </DialogTitle>
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <p>
            Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at the
            coast of the Semantics, a large language ocean. A small
            river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your
            mouth. Even the all-powerful Pointing has no control about
            the blind texts it is an almost unorthographic life One
            day however a small line of blind text by the name of
            Lorem Ipsum decided to leave for the far World of Grammar.
          </p>
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button link>Nice Button</Button>
          <Button
            onClick={() => setShowModal(false)}
            color="danger"
            simple
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>}
    </div>
  )
}

export default DownloadHelpModal