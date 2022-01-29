import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const Filter = ({handleSearch,setFrating}) => {
  const [rating, setRating] = useState(0) 
  const handleRating = (rate) => {
    setRating(rate)
    setFrating(rate)
    
  }
  return <div>
    <form>
      <input type="text" onChange={e=>handleSearch(e.target.value)} />
      <button>Search</button>
      </form>
      <Rating onClick={handleRating} ratingValue={rating} style={{color :" #ffd52d"}}/>
  </div>;
};

export default Filter;

