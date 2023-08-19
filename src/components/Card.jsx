/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable react/prop-types */
import React from 'react';

const Card = ({ name, email, id }) => (
  <div className="card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img
      src={`https://robohash.org/${id}?200x200`}
      alt="robots"
    />
    <div className="card-body">
      <h2 className="card-title">
        {name}
      </h2>
      <p className="card-text">
        {email}
      </p>
    </div>
  </div>
);

export default Card;
