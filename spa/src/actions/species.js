export const GET_SPECIES_SUCCESS = "GET_SPECIES_SUCCESS";
export const GET_SPECIE_SUCCESS = "GET_SPECIE_SUCCESS";
const BASE_URL = "https://swapi.co/api/species";

const getSpeciesSuccess = data => {
  return {
    type: GET_SPECIES_SUCCESS,
    data
  };
};

const getSpecieSuccess = data => {
  return {
    type: GET_SPECIE_SUCCESS,
    data
  };
};

const getData = async url => {
  let response = await fetch(url);
  return response.json();
};

export const getSpecies = () => {
  return async dispatch => {
    let response = await fetch(BASE_URL);
    let species = await response.json();
    dispatch(getSpeciesSuccess(species.results));
  };
};

export const getSpecie = id => {
  return async dispatch => {
    let response = await fetch(`${BASE_URL}/${id}/`);
    let specie = await response.json();
    let homeworld = await getData(specie.homeworld);
    specie.homeworld = homeworld.name;

    dispatch(getSpecieSuccess(specie));
  };
};
