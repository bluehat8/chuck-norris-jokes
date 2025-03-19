import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJokeRequest, fetchCategoriesRequest } from '../../redux/actions';
import CategoryFilter from '../../components/CategoryFilter/index';
import JokeDisplay from '../../components/JokeDisplay/index';

const HomePage = () => {
  const dispatch = useDispatch();

  const { joke, categories, loading, error, iconUrl, createdAt } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
    dispatch(fetchJokeRequest('money')); 
  }, [dispatch]);

  const handleCategorySelect = (category) => {
    dispatch(fetchJokeRequest(category));
  };

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <CategoryFilter categories={categories} onCategorySelect={handleCategorySelect} />
      
      <JokeDisplay 
        joke={joke}
        iconUrl={iconUrl} 
        categories={categories} 
        createdAt={createdAt} 
      />
    </div>
  );
};

export default HomePage;
