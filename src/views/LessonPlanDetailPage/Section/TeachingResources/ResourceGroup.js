import React from "react";

import { getIcon } from "../../icons";

function robustLinks(url, linkText,i){
  if(url){
    return(
    <li key={i}>
      {getIcon(linkText)}
      <a href={url} target="_blank" rel="noreferrer noopener">
        {linkText}
      </a>
    </li>
    )
  }else{

  }
}

const ResourceGroup = ({ itemTitle, links = [] }) => {
  if (links.url) {
    links = [links];
  }
  return (
    <li>
      <p>
        <strong>{itemTitle}</strong>
      </p>
      <ul>
        {links.length > 0 &&
          links.map(({ url, linkText }, i) => (
            robustLinks(url,linkText,i)
          ))}
      </ul>
    </li>
  );
};

export default ResourceGroup;
