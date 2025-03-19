
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCategories, getRandomJoke } from '../utils/api';
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
} from './actions';

function* fetchCategoriesSaga() {
  try {
    const response = yield call(getCategories);
    yield put({ type: FETCH_CATEGORIES_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: FETCH_CATEGORIES_FAILURE, payload: error.message });
  }
}

function* fetchJokeSaga(action) {
  try {
    const response = yield call(getRandomJoke, action.payload);
    console.log('API response:', response); 
    yield put({ type: FETCH_JOKE_SUCCESS, payload: response }); 
  } catch (error) {
    yield put({ type: FETCH_JOKE_FAILURE, payload: error.message });
  }
}


export default function* rootSaga() {
  yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
  yield takeLatest(FETCH_JOKE_REQUEST, fetchJokeSaga);
}
