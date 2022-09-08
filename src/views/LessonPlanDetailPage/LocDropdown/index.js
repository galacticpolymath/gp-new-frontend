import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useParams } from "react-router-dom";
import './tooltip.css';

export default function LocDropdown ({ selectedLocale, availLocales, setLoc }) {
  // <locale>: <reactflagselect country code>
  const countryToLoc= {"US": "en-US", "GB": "en-GB", "NZ": "en-NZ", "FR": "fr", "DE": "de", "IT": "it", "AW": "fr-AW"}

  let { lessonId } = useParams(); // defined and App.js. taken from URL suffix
  let countries = []
  let labels = {}
  const selectedLanguage = new Intl.DisplayNames(['en'], {type: 'language'}).of(selectedLocale.substring(0,2));
  const selectedCountry = new Intl.Locale(selectedLocale).region;
  const selectedLabel = selectedLanguage + ' (' + selectedCountry + ')';
  const [tooltip, showTip] = useState(true);
  const onClick = () => showTip(false);

  availLocales.forEach((loc) => {
    const country = new Intl.Locale(loc).region;
    countries.push(country);
    labels[country] = loc;
  })
  
  return (countries.length <= 1 ? 
    <div>{selectedLabel}</div> : 
    <div className='tooltip'>
      <ReactFlagsSelect 
        selected={selectedLocale} 
        countries={countries} 
        customLabels= {labels} 
        showSelectedLabel={false} 
        placeholder={selectedLabel} 
        alignOptionsToRight={true} 
        fullWidth={false}
        onSelect={countryCode => {
          const loc = countryToLoc[countryCode];
          setLoc(loc);
        }} 
      />
      { tooltip ? 
        <span 
          className='tooltiptext'
          onClick={onClick}
        > Click for more locales! </span> : null }
    </div>
  );
};