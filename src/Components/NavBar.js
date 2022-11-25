import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/" >
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99sLEz4K2NLMV8_znUwGgeRxNVP52HHvTFA&usqp=CAU"
              width="40"
              height="30"
              style={{marginLeft: "0.8rem"}}
              className="d-inline-block align-top"
              alt="Movie App"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movies/popular" >Popular</Nav.Link>
            <Nav.Link as={Link} to="/movies/top_rated" >Top Rated</Nav.Link>
            <Nav.Link as={Link} to="/movies/upcoming" >Upcoming</Nav.Link>
          </Nav>
      </Navbar>
    </>
  )
}

export default NavBar
