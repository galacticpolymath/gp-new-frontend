import React, { useContext, useEffect, useRef } from 'react'
import classNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";
import hotkeys from 'hotkeys-js';

import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import Close from "@material-ui/icons/Close";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from 'components/CustomButtons/Button'
import CustomInput from 'components/CustomInput/CustomInput'

import SearchContext from './SearchContext';

import './index.scss'

import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const SmartSearch = () => {
  const classes = useStyles();

  // Hijack Find keyboard shortcuts
  hotkeys('ctrl+f,cmd+f', (e) => {
    e.preventDefault() 
    setIsSearchVisible(true)
  });

  const { searchTerm, setSearchTerm, isSearchVisible, setIsSearchVisible } = useContext(SearchContext)

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [isSearchVisible])

  return <div className="SmartSearchWrapper">
    <div className="tray">
      <Button
        className={classNames("SearchButton", { emptySearch: !searchTerm })}
        type="button"
        color="primary"
        aria-label="search"
        justIcon={!searchTerm}
        onClick={() => setIsSearchVisible(true)}
        round
      >
        <SearchIcon/>
        {searchTerm && 'searching for "'+searchTerm+'"'}
      </Button>
      {searchTerm && <Button
        round
        className="SearchButton"
        onClick={() => setSearchTerm('')}
      >
        <CloseIcon/> Clear search
      </Button>}
    </div>
    
    {isSearchVisible && (
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modalMedium,
        }}
        className='SmartSearchDialog'
        open={isSearchVisible}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setIsSearchVisible(false)}
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
            onClick={() => setIsSearchVisible(false)}
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
            initialValue={searchTerm}
            inputProps={{
              defaultValue: searchTerm,
              onKeyDown(e) {
                if (e.key === "Enter") {
                  e.preventDefault()
                  setSearchTerm(e.target.value)
                }
              },
              innerRef: inputRef,
              autoFocus: true
            }}
            name="searchTerm"
          />
          <Button
            onClick={() => setSearchTerm(inputRef.current.value)}
            round
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