const START_REQUEST = "START_REQUEST";
const GET_STARSHIPS_SUCCESS = "GET_STARSHIPS_SUCCESS";
const GET_STARSHIP_SUCCESS = "GET_STARSHIP_SUCCESS";
const BASE_URL = "https://swapi.co/api/starships";

const startRequest = () => {
  return {
    type: START_REQUEST
  };
};

const getStarshipsSuccess = (data) => {
  return {
    type: GET_STARSHIPS_SUCCESS,
    data
  };
};

const getStarshipSuccess = (data) => {
  return {
    type: GET_STARSHIP_SUCCESS,
    data
  };
};

export const getStarships = async () => {
  return dispatch => {
    dispatch(startRequest());
    let response = await fetch(BASE_URL);
    let starships = await response.json();
    dispatch(getStarshipsSuccess(starships))
  };
};

export const getStarship = async (id) => {
  return dispatch => {
    dispatch(startRequest());
    let response = await fetch(`${BASE_URL}/${id}/` );
    let starship = await response.json();
    dispatch(getStarshipSuccess(starship))
  };
};
