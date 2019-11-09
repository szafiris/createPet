import React from 'react'
import { Link } from 'react-router-dom'
import './CreatePet.css';
import Header from "./Header"


const Decision = () => (
  <div className="CreatePet">
    <div className="CreatePet-text">
      Feeling Lonely? {"\n"}
      Need a Friend? {"\n"}
      We will generate one for you. {"\n"}
      I want a...
    </div>
    <div>
      <button className="CreatePet-button">
        <Link to='/Dog'>Dog</Link>
      </button>
      <button className="CreatePet-button">
        <Link to='/Cat'>Cat</Link>
      </button>
      <button className="CreatePet-button">
        <Link to='/Bird'>Bird</Link>
      </button>
    </div>
  </div>
)

export default Decision



