import React, { useState, useEffect } from 'react'
import './CreatePet.css';
import Name from "./Name"


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
      <Name />
      <img src={image["url"]} alt="A dog" style={{ marginTop: 30, width: 400, height: 400 }}></img>
    </div >
  )
}

export default Dog
