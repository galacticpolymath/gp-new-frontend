import { useEffect } from 'react';

import throttle from "lodash.throttle";

let lastOffset = window.pageYOffset;

const getOffset = function (element) {
  let top = 0;
  do {
    top += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);

  return top;
};

const activateDot = function (index, elemIds) {
  const activeNodeid = elemIds[index];

  const activeNode = document.querySelector(`.${activeNodeid}`);

  if (!activeNode || !activeNode.classList.contains("activeDot")) {
    activeNode && activeNode.classList.add("activeDot");
  }

  let notActive = elemIds.slice();
  notActive.splice(index, 1);
  notActive.forEach((id) => {
    let div = document.querySelector(`.${id}`);
    div && div.classList.remove("activeDot");
  });
};

const scrollDown = function (cursorBottom, elemOffsets, elemIds) {
  // you have the offset tops. find nearest one above current position by..
  // filtering out the ones below it and taking the last elem
  // filter:
  const removeBelow = elemOffsets.filter(function (x) {
    return x < cursorBottom - window.innerHeight / 4;
  });
  const index = removeBelow.length > 0 ? removeBelow.length - 1 : 0;

  activateDot(index, elemIds);
};

const scrollUp = function (cursorTop, elemOffsets, elemIds) {
  // when you're scrolling up you want the nearest previous top.... find index - 1
  const removeBelow = elemOffsets.filter(function (x) {
    return x < cursorTop + window.innerHeight / 4;
  });
  const index = removeBelow.length > 0 ? removeBelow.length - 1 : 0;

  activateDot(index, elemIds);
};

const scrollAction = function () {
  const scrollElems = Array.prototype.slice.call(
    document.querySelectorAll(".SectionHeading")
  );

  let elemOffsets = [];
  let elemIds = [];

  scrollElems.forEach((el) => {
    elemIds.push(el.id.replace("&", "\\&"));
    elemOffsets.push(getOffset(el));
  });

  const cursorTop = window.pageYOffset;
  const cursorBottom = window.pageYOffset + window.innerHeight;

  if (window.pageYOffset < lastOffset) {
    scrollUp(cursorTop, elemOffsets, elemIds);
  } else {
    scrollDown(cursorBottom, elemOffsets, elemIds);
  }
  lastOffset = window.pageYOffset;
};

const useScrollHandler = () => {
  useEffect(() => {
    window.addEventListener("scroll", throttle(() => scrollAction(), 100));
    return () => {
      window.removeEventListener("scroll", throttle(() => scrollAction(), 100));
    };
  }, []);
}

export default useScrollHandler