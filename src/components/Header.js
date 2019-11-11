import React from 'react'
import { Link } from 'react-router-dom'
import './CreatePet.css';


const Header = () => (
  <header className="CreatePet-header">
    <p>
      <Link to='/' style={{ textDecoration: 'none', color: 'white', marginLeft: 50 }}>Create a Pet</Link>
      <img src="shibe.png" alt="A dog" style={{ height: 50, width: 50, marginLeft: 20 }}></img>
    </p>
  </header>
)

export default Header