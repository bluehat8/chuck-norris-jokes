
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';

export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error,
});

export const fetchJokeRequest = (category) => ({
  type: FETCH_JOKE_REQUEST,
  payload: category,
});

export const fetchJokeSuccess = (jokeData) => ({
  type: FETCH_JOKE_SUCCESS,
  payload: jokeData,
});

export const fetchJokeFailure = (error) => ({
  type: FETCH_JOKE_FAILURE,
  payload: error,
});
