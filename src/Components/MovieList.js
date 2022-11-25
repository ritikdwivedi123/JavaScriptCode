import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card"
import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"
import "./Style.css"

function MovieList() {
  const params= useParams()
  const newType= params.type
  console.log(newType)
  const renderAfterCalled = useRef(false);
  const [movielist, setMovieList] = useState([]);

  useEffect(() => {
    getData()
}, [])

useEffect(() => {
  if (!renderAfterCalled.current) { 
    getData();
  }
  renderAfterCalled.current = true;
},[newType]);

  const getData=()=>{
    fetch(
      `https://api.themoviedb.org/3/movie/${newType}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  }

  

  return (
    <>
    <h2 className="list__title">{newType.toUpperCase()}</h2>
<div className="CardBody">
      {movielist.map((data) => {
       return( 
         <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{data.original_title}</Card.Title>
              <Card.Text>
                {data.overview.slice(0,110)+"..."}
              </Card.Text>
          <Link to={`/movie/${data.id}`} style={{textDecoration:"none", color:"white"}}>
              <Button variant="primary">Details</Button>
          </Link>
            </Card.Body>
          </Card>
      )
      }
      )}
      </div>
      </>
  );
}

export default MovieList;
