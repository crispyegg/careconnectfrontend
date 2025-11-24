import React, { useEffect } from "react";

import { useState } from "react";
import axios from "axios";

const AddLocation = () => {
  const [tdata, settdata] = useState([]);

  const [location,setlocation] = useState({tname:'', location:''})

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/addtreatment/`)
      .then((res) => {
        settdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const changeData = (e)=>{
     setlocation({...location,[e.target.name]:e.target.value})
  }

  const submitHandler = (e) =>{
    e.preventDefault();
    axios.post(`https://careconnectbackend-7h42.onrender.com/addlocation/`,location)
    .then((res)=>{
      alert('location added')
    })
    .catch((err)=>console.log(err)
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-4 rounded-4 p-4">
              <h2 className="mb-4 text-center fw-bold">Add Location</h2>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Select your Treatment
                  </label>
                  <input
                 
                    list="tname"
                    name="tname"
                    className="form-control" 
                    onChange={changeData}
                  />
                  <datalist id="tname" >
                  {tdata.map((e,id) => {
                    return (
                     <option key={id} value={e.tname} />
                    );
                  })}
                 </datalist> 
                </div>

                <div className="mb-3">
                      <label  className="form-label fw-semibold" >
                        Treatment's Location
                      </label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    onChange={changeData}
                    placeholder="Add location"
                  />

                  <button
                    type="submit" className="btn btn-primary rounded-pill d-block mx-auto px-4 mt-4 ">
                    Add Location
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLocation;
