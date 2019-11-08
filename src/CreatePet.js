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
      <button>
        Dog
      </button>
      <button>
        Cat
      </button>
      <button>
        Bird
      </button>
    </div>
  );
}

export default CreatePet;
