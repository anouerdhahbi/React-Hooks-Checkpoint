import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "./Detailstyle.css";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const Details = ({ data }) => {
  const { id } = useParams();
  // const [detail, setdetail] = useState({});
  const newdetail = data.find((el) => el.id == id);
  // setdetail(newdetail)

  return (
    <div className="detailStyle">
      <h1 className="movietitle">{newdetail.title}</h1>
      <p>
        <span className="titles">Description</span> : {newdetail.description}
      </p>
      <p>
        <span className="titles">Year</span> : {newdetail.year}
      </p>
      <p>
        <span className="titles">Type</span>: {newdetail.type}
      </p>
      <p>
        <span className="titles">Length</span>: {newdetail.length}
      </p>

      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={newdetail.trailerURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Trailer"
        />
      </div>
      <Link to="/">
        <button className="fas fa-download">Back to home</button>
      </Link>
    </div>
  );
};

export default Details;
