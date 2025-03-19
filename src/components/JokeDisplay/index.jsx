import React from 'react';
import PropTypes from 'prop-types';

const JokeDisplay = ({ joke, iconUrl, categories, createdAt }) => {
  if (!joke) {
    return <p>No joke available</p>;
  }

  return (
    <div className="joke-display">
      <div className="joke-header">
        <img src={iconUrl || 'default-icon-url.png'} alt="Chuck Norris" className="joke-avatar" />
        <h2>Chuck Norris Joke</h2>
      </div>
      
      <div className="joke-body">
        <p>{joke}</p>
      </div>
      
      <div className="joke-footer">
        {/* <p>Categories: {categories ? categories.join(', ') : 'No categories'}</p> */}
        <p>Created at: {createdAt ? new Date(createdAt).toLocaleString() : 'Unknown date'}</p>
      </div>
    </div>
  );
};

JokeDisplay.propTypes = {
  joke: PropTypes.string,
  iconUrl: PropTypes.string,
  categories: PropTypes.array,
  createdAt: PropTypes.string,
};

export default JokeDisplay;