import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="container-fluid">
<div className="stars" style={{backgroundColor:"#483265"}}> 
  <div className="custom-navbar">
    {/* <div className="brand-logo">
      <img src="http://salehriaz.com/404Page/img/logo.svg" width="80px" />
    </div> */}
    {/* <div className="navbar-links">
      <ul>
        <li>
          <Link to="http://salehriaz.com/404Page/404.html" target="_blank">
            Home
          </Link>
        </li>
        <li>
          <Link to="http://salehriaz.com/404Page/404.html" target="_blank">
            About
          </Link>
        </li>
        <li>
          <Link to="http://salehriaz.com/404Page/404.html" target="_blank">
            Features
          </Link>
        </li>
        <li>
          <Link
            to="http://salehriaz.com/404Page/404.html"
            className="btn-request"
            target="_blank"
          >
            Request A Demo
          </Link>
        </li>
      </ul>
    </div> */}
  </div>
  <div className="central-body">
    <img
      className="image-404"
      src="http://salehriaz.com/404Page/img/404.svg"
      width="300px"
    />
    <Link
      to="/HOME"
      className="btn-go-home"
      target="_blank"
    >
      GO BACK HOME
    </Link>
  </div>
  <div className="objects">
    <img
      className="object_rocket"
      src="http://salehriaz.com/404Page/img/rocket.svg"
      width="40px"
    />
    <div className="earth-moon">
      <img
        className="object_earth"
        src="http://salehriaz.com/404Page/img/earth.svg"
        width="100px"
      />
      <img
        className="object_moon"
        src="http://salehriaz.com/404Page/img/moon.svg"
        width="80px"
      />
    </div>
    <div className="box_astronaut">
      <img
        className="object_astronaut"
        src="http://salehriaz.com/404Page/img/astronaut.svg"
        width="140px"
      />
    </div>
  </div>
  <div className="glowing_stars">
    <div className="star" />
    <div className="star" />
    <div className="star" />
    <div className="star" />
    <div className="star" />
  </div>
</div>


    </div>
  )
}

export default Page404;