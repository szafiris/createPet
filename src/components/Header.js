import React from 'react'
import { Link } from 'react-router-dom'
import './CreatePet.css';


const Header = () => (
  <header className="CreatePet-header">
    <p>
      Create a Pet
    </p>
    <Link to='/'>Home</Link>
  </header>
)

export default Header