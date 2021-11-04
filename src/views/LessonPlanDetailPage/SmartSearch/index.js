import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from 'components/CustomButtons/Button'
import CustomInput from 'components/CustomInput/CustomInput'

import './index.scss'

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SmartSearch = ({
  isVisible, 
  setIsVisible,
  search,
}) => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('')

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [isVisible])

  return <div className="SmartSearchWrapper">
    <div className="icon">
      <Button
        type="button"
        color="primary"
        aria-label="search"
        onClick={() => setIsVisible(true)}
        justIcon
        round
      >
        <SearchIcon/>
      </Button>
    </div>
    {isVisible && (
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modalMedium,
        }}
        className='SmartSearchDialog'
        open={isVisible}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setIsVisible(false)}
      >
        <DialogTitle
          disableTypography
          className={classes.modalHeader}
        >
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => setIsVisible(false)}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
          <h4 className={classes.modalTitle}>
            Search Lesson
          </h4>
        </DialogTitle>
        <DialogContent
          id='SmartSearch'
          className="SmartSearch"
        >
          <CustomInput
            labelText="Search for"
            type="text"
            value={searchTerm} 
            inputProps={{
              onChange(e) {
                setSearchTerm(e.target.value)
              },
              innerRef: inputRef,
              autoFocus: true
            }}
            name="searchTerm"
          />
          <Button
            onClick={() => search(searchTerm)}
            color="primary"
          >
            Search
          </Button>
        </DialogContent>
      </Dialog>
    )}
  </div>
}

export default SmartSearch