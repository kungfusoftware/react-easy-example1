import fetch from 'isomorphic-fetch';

// Polyfill Promises for IE and older browsers.
require('es6-promise').polyfill();

const SEARCH_URI = 'https://bahdeveventplanner.azurewebsites.net/oData/Locations';

export default function GetLocation(query, page=1) {
  return fetch(`${SEARCH_URI}?$filter=contains(Name,'${query}')`)
    .then((resp) => resp.json())
    .then(({items, total_count}) => {
      const options = items.map((i) => ({
        Name: i.Name,
        Address: i.FullAddress,
      }));
      return {options, total_count};
    });
}