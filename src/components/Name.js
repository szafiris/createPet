import React, { useState, useEffect } from 'react'
import './CreatePet.css';
import { createPet } from "../api"
import { Link } from 'react-router-dom'

const Name = () => {
  const [error, setError] = useState(false)
  const [text, setText] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://uinames.com/api/?amount=1");
      res
        .json()
        .then(res => setText(res))
        .catch(err => setError(err));
    }
    fetchData();
  }, []);

  return (
    <div className="CreatePet-dog">
      <div className="CreatePet-text" style={{ marginTop: 30 }}>
        Meet your new pet, {text.name}. They are from {text.region}
      </div>
    </div >
  )
}
export default Name