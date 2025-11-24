import React, { useEffect, useState } from "react";
import axios from "axios";

const AddDoctors = () => {
  const [doctorData, setdoctorData] = useState({
    tname:"",
    location:"",
    doctorName: "",
    phoneNumber: "",
    experience: "",
    email: "",
    message: "",
    qualification:'',
    skill:'',
  });

  const changeHandler = (e) => {
    setdoctorData({ ...doctorData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://careconnectbackend-7h42.onrender.com/adddoctors`, doctorData)
      .then(() => {
        alert("Doctor added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [treatmentData, settreatmentData] = useState([]);
  const [locationData, setlocationData] = useState([]);

  
  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/addtreatment`)
      .then((res) => {
        settreatmentData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });


     axios.get(`https://careconnectbackend-7h42.onrender.com/addlocation`) 
     .then((res)=>{
      setlocationData(res.data)
     })
     .catch((err)=>{
      console.log(err);
      
     })
  },[]);

  



  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg border border-dark rounded-4 bg-light">
            <div className="card-body p-5">
              <h3 className="card-title mb-4 text-center fw-bold text-success">
                Add Doctor
              </h3>

              <form className="row g-3" onSubmit={submitHandler}>
                {/* Treatment Name */}
                <div className="col-md-6">
                  <label className="form-label">Treatment Name</label>
                  <select
                    className="form-select shadow-sm border-dark"
                    name="tname"
                    onChange={changeHandler}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      -- Select Treatment --
                    </option>

                    {treatmentData.map((e, id) => {
                      return (
                        <option key={id} value={e.tname}>
                          {e.tname}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* Location */}
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <select
                   
                    className="form-select shadow-sm border-dark"
                    name="location"
                    placeholder="City / Clinic address"
                    onChange={changeHandler}
                    defaultValue=""
                  >   
                   <option value="" disabled>
                      -- Select Location --
                    </option>
                    {locationData.map((e, id) => {
                      return (
                        <option key={id} value={e.location }>
                          {e.location}
                        </option>
                      );
                       })}
                   </select>
                </div>

                {/* Doctor Name */}
                <div className="col-md-6">
                  <label className="form-label">Doctor Name</label>
                  <input
                    type="text"
                    className="form-control shadow-sm border-dark"
                    name="doctorName"
                    placeholder="Dr. John Doe"
                    onChange={changeHandler}
                  />
                </div>

                {/* Phone Number */}
                <div className="col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control shadow-sm border-dark"
                    name="phoneNumber"
                    placeholder="+91 98765 43210"
                    onChange={changeHandler}
                  />
                  <div className="form-text">
                    Include country code if needed.
                  </div>
                </div>

                {/* Experience */}
                <div className="col-md-6">
                  <label className="form-label">Experience (years)</label>
                  <input
                    type="number"
                    className="form-control shadow-sm border-dark"
                    name="experience"
                    onChange={changeHandler}
                    placeholder="e.g. 5"
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-sm border-dark"
                    name="email"
                    placeholder="doctor@example.com"
                    onChange={changeHandler}
                  />
                </div>
                {/* Qualifications */}
                <div className="col-md-6">
                  <label  className="form-label">
                   Doctor Qualifications
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm border-dark"
                    name="qualification"
                    placeholder="qualifications"
                    onChange={changeHandler}
                  />
                </div>
                {/* skills */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                   Extra Skills
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-sm border-dark"
                    name="skill"
                    placeholder="Extra Skill"
                    onChange={changeHandler}
                  />
                </div>

                {/* Message */}
                <div className="col-12">
                  <label  className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control shadow-sm border-dark"
                    name="message"
                    rows="4"
                    placeholder="Write a short message..."
                    onChange={changeHandler}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-primary px-5 shadow">
                    Add Doctor
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
