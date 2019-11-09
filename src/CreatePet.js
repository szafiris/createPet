import React from 'react';
import logo from './logo.svg';
import './CreatePet.css';

function CreatePet() {
  return (
    <div className="CreatePet">
      <header className="CreatePet-header">
        <p>
          Create a Pet
        </p>
      </header>
      <div className="CreatePet-text">
        <text>
          Feeling Lonely? {"\n"}
          Need a Friend? {"\n"}
          We will generate one for you. {"\n"}
          I want a...
        </text>
      </div>
      <div>
        <button className="CreatePet-button">
          Dog
        </button>
        <button className="CreatePet-button">
          Cat
        </button>
        <button className="CreatePet-button">
          Bird
        </button>
      </div>
    </div>
  );
}

export default CreatePet;
