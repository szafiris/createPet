import React from 'react'
import { Link } from 'react-router-dom'
import './CreatePet.css';


const Decision = () => (
  <div>
    <div className="CreatePet-text" style={{ marginLeft: 50, marginTop: 50 }}>
      Feeling Lonely? {"\n"}
    </div>
    <div className="CreatePet-text" style={{ marginLeft: 133 }}>
      Need a Friend? {"\n"}
    </div>
    <div className="CreatePet-text" style={{ marginLeft: 216 }}>
      We will generate one for you. {"\n"}
    </div>
    <div className="CreatePet-text" style={{ marginLeft: 300 }}>
      I want a...
    </div>

    <div className="CreatePet">
      <Link to='/Dog' style={{ textDecoration: 'none', color: 'white' }}>
        <button className="CreatePet-button">
          Dog
        </button>
      </Link>
      <Link to='/Cat' style={{ textDecoration: 'none', color: 'white' }}>
        <button className="CreatePet-button">
          Cat
        </button>
      </Link>
      <Link to='/Bird' style={{ textDecoration: 'none', color: 'white' }}>
        <button className="CreatePet-button">
          Bird
        </button>
      </Link>
    </div>
  </div >
)

export default Decision



