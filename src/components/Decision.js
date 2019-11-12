import React from 'react'
import { Link } from 'react-router-dom'
import './CreatePet.css';


const Decision = () => (
  <div>
    <div className="CreatePet-text" style={{ marginLeft: 50, marginTop: 50 }}>
      Feeling Lonely? {"\n"}
    </div>
    <div className="CreatePet-text" style={{ marginLeft: 133, marginTop: 30 }}>
      Need a Friend? {"\n"}
    </div>
    <div className="CreatePet-text" style={{ marginLeft: 216, marginTop: 30 }}>
      We will generate one for you. {"\n"}
    </div>
    <div className="CreatePet-text" style={{ marginLeft: 300, marginTop: 30 }}>
      Are you ready?
    </div>

    <div className="CreatePet">
      <Link to='/Dog' style={{ textDecoration: 'none', color: 'white' }}>
        <button className="CreatePet-button">
          I want a dog!
        </button>
      </Link>
    </div>

  </div >
)

export default Decision



