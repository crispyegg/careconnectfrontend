

import axios from 'axios'
import React, { useState } from 'react'

const QuickAppoint = () => {
  
  const [quickInput , setquickInput ] = useState({name:'', email:'' , phone:''})


  const changeHandler = (e)=>{
    setquickInput({...quickInput,[e.target.name]:e.target.value})
  }

  const quickHandler =(e)=>{
     e.preventDefault()
     axios.post(`https://careconnectbackend-7h42.onrender.com/quickappoint`,quickInput)
     .then((res)=>{
      if(res.data.status){
        alert(res.data.message)
      }else{
        alert(res.data.message);
      }
      
     })  
     .catch((err)=>{
      console.log(err);
      
     }) 
  }

  return (
    <div className="bg-light py-4 shadow-sm">
      <div className="container text-center">
        <h4 className="text-primary fw-bold mb-4">Quick Appointment</h4>

        <form className="row justify-content-center g-3 align-items-end" onSubmit={quickHandler}>
          <div className="col-12 col-md-3">
            <label className="form-label fw-semibold mb-1">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              name='name'
               onChange={changeHandler}
            />
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label fw-semibold mb-1">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name='email'
              onChange={changeHandler}
            />
          </div>

          <div className="col-12 col-md-3">
            <label className="form-label fw-semibold mb-1">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              name='phone'
              onChange={changeHandler}
            />
          </div>

          <div className="col-12 col-md-auto">
            <button type="submit" className="btn btn-primary w-100">
              Book
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuickAppoint