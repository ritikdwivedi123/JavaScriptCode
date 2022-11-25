import { Carousel } from "react-bootstrap";
import React, { useState, useRef } from "react";
import { useEffect } from "react";

function Home() {
  const [movie, setMovie] = useState([]);
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1"
      )
        .then((res) => res.json())
        .then((data) => setMovie(data.results));
    }
    renderAfterCalled.current = true;
  });
  return (
    <>    
      <Carousel>
        {movie.map((data) => (
            <Carousel.Item>
            <img
              style={{
                margin: "auto",
                display: "block",
                width: "100%",
                height: "672px",
              }}
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>{data.original_title}</p>
              <h5>{data.overview}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>  
    </>
  );
}

export default Home;
