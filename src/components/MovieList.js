import React from 'react';
import MovieCard from './MovieCard'

const MovieList = ({data,Search,frating,handelDelet}) => {
  return <div>
    {data.filter(ele=>ele.title.toLowerCase().includes(Search.toLowerCase().trim())&&frating<=ele.rating

    ).map((el,index)=><MovieCard key={index} Movie={el} frating={frating} handelDelet={handelDelet}/>)}
    
  </div>;
};

export default MovieList;
