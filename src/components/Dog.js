import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CreatePet.css';
import Header from "./Header"
import { createPet } from "../api"


const Dog = () => {
  // const [error, setError] = useState(null)
  // const [image, setImage] = useState([])
  // const createDog = async event => {
  //   // event.preventDefault()

  //   setError(null)
  //   console.log("it is called")


  // }
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     try {
  //       console.log("HELP")
  //       const result = await createPet({
  //         decision: "shibes"
  //       })
  //       console.log("CALLLED")
  //       console.log(result[0])
  //       setImage(result[0])
  //     } catch (error) {
  //       setError('Sorry, someone let the dogs out')
  //     }
  //     // const response = await MyAPI.getData(someId);
  //     // ...
  //   }
  //   fetchData();
  // }, []);
  return (
    <div>
      <div>
        A DOG!
      </div>
      <img src="https://cdn.shibe.online/shibes/447eef66f38e1fbeef5b801bef16777c5d654a6d.jpg" alt="A dog"></img>
    </div >
  )

}

export default Dog