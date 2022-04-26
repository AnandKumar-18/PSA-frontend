import React from 'react'
import frontImg from "../Pics/frontImg.png"
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <>
      <div className="main-container-home">
        <div className="second-container-home">
          <img src={frontImg} alt="page" />
          <div className="left-home">
            <h1>Anand Team</h1>
            <Link to= "/post"> <button> Enter </button> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home