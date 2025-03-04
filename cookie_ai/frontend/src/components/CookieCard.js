import React from 'react';

function CookieCard({ cookie }) {
  return (
    <div>
      <img src={cookie.imageUrl} alt={cookie.name} />
      <h2>{cookie.name}</h2>
      <p>{cookie.description}</p>
      <p>Price: ${cookie.price}</p>
    </div>
  );
}

export default CookieCard;