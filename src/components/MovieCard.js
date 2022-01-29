import React from "react";
import "./MovieCard.css";
import StarRatings from 'react-star-ratings';

function MovieCard({Movie ,handelDelet}) {
const{ title, description, posterURL, rating, year, length, type } =Movie
  return (
<div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{title}</h1>
            <div className="card_cat">
              <p className="PG">PG - 13</p>
              <p className="year">{year}</p>
              <p className="genre">{type} </p>
              <p className="time">{length}</p>
            </div>
            <p className="disc">{description}</p>

            <div className="social-btn">
              <button>
                <i className="fas fa-play"></i> SEE TRAILER
              </button>

              <button>
                <i className="fas fa-download"></i> DOWNLOAD
              </button>
              <button  onClick={()=>handelDelet(Movie.title)}>
                <i className="fas fa-download"></i> Delete
              </button>
            
            </div>
          </div>
        </div>
        <StarRatings
          rating={rating/20}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension='30px'
        />
        <div className="card_right">
          <div className="img_container">
            <img src={posterURL} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MovieCard;

