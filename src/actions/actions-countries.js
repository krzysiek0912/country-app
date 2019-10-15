export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

// listowanie wszystkich dostępnych państw:
export const getCountries = () => ({ type: GET_COUNTRIES})
// usuwanie państwa
export const deleteCountry = ( id ) => ({ type: DELETE_COUNTRY, id });
export const getCountry = (id) => ({ type: GET_COUNTRY, id });
export const searchCountries = (searchText) => ({ type: SEARCH_COUNTRIES, searchText });
export const setContinent = (name) => ({ type: SET_CONTINENT, name });
