import React from "react";
import ReactFlagsSelect from "react-flags-select";

export default function LocDropdown ({ selectedLocale, availLocales, setLocale }) {
  // <locale>: <reactflagselect country code>
  const countryToLoc= {"US": "en-US", "GB": "en-GB", "NZ": "en-NZ", "FR": "fr", "DE": "de", "IT": "it", "AW": "fr-AW"}

  let countries = []
  let labels = {}
  const selectedLanguage = new Intl.DisplayNames(['en'], {type: 'language'}).of(selectedLocale)

  availLocales.forEach((loc) => {
    const country = new Intl.Locale(loc).region;
    countries.push(country);
    labels[country] = loc;
  })
  
  return (countries.length <= 1 ? 
    <div>Language: {selectedLanguage}</div> : 
    <ReactFlagsSelect 
      selected={selectedLocale} 
      countries={countries} 
      customLabels= {labels} 
      showSelectedLabel={false} 
      placeholder={"Language: " + selectedLanguage} 
      alignOptionsToRight={true} 
      fullWidth={false}
      onSelect={countryCode => {
        setLocale(countryToLoc[countryCode])
      }} 
    />  
  );
};