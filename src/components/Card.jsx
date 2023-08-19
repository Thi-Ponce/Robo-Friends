import React from 'react';

const Card = () => (
  <div className="card bg-light-green dib br3 pa3 ma2 grow">
    <img src="https://robohash.org/test?200x200" alt="robots" />
    <div className="card-body">
      <h2 className="card-title">Random Image</h2>
      <p className="card-text">Random Image Generator</p>
    </div>
  </div>
);

export default Card;
