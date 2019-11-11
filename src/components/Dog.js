import React, { useState, useEffect } from 'react'
import './CreatePet.css';
import { createPet } from "../api"
import { Link } from 'react-router-dom'


const Dog = () => {
  const [error, setError] = useState(false)
  const [image, setImage] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://random.dog/woof.json/");
      res
        .json()
        .then(res => setImage(res))
        .catch(err => setError(err));
    }
    fetchData();
  }, []);

  return (
    <div className="CreatePet-dog">
      <div className="CreatePet-text" style={{ marginTop: 30 }}>
        Here is your new dog! {image["url"]}
      </div>
      <img src={image["url"]} alt="A dog" style={{ marginTop: 30, width: 200, height: 200 }}></img>
      <div className="CreatePet-text" style={{ marginTop: 30 }}>
        Want Another?
      </div>
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
    </div >
  )
}

export default Dog

// my_dic = {
// }
// for line in file:
//   temp = line.split()
// my_dic[temp[0]] = {}
