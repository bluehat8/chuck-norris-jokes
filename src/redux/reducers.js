
import {
  FETCH_JOKE_REQUEST,
  FETCH_JOKE_SUCCESS,
  FETCH_JOKE_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from './actions';

const initialState = {
  joke: '',          
  categories: [],     
  iconUrl: '',        
  createdAt: '',     
  loading: false,    
  error: null,      
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKE_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_JOKE_SUCCESS:
      console.log('Joke payload:', action.payload); 
      return {
        ...state,
        loading: false,
        joke: action.payload.value || '',
        iconUrl: action.payload.icon_url || '',
        // categories: action.payload.categories || [],
        createdAt: action.payload.created_at || '',
      };

    case FETCH_JOKE_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };

    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default rootReducer;