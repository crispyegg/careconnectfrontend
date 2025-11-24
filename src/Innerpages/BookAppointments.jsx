import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const BookAppointments = () => {
  const {tname,location,doctorName} = useParams();

  const [bookAppointmentData, setbookAppointmentData] = useState({
    tname:tname|| "",
    location:location|| "",
    doctorName: doctorName||"",
    patientName: "",
    patientEmail: "",
    message:"",
  });
  
 
  const onchangeData =(e)=>{
   setbookAppointmentData({...bookAppointmentData , [e.target.name]:e.target.value})
  }

  const submitHandler = (e)=>{
    e.preventDefault()
    axios.post(`https://careconnectbackend-7h42.onrender.com/bookappointment`,bookAppointmentData)
    .then((res)=>{
      alert(`Appointment Booked`)
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  return (
    <div> 
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 fw-bold text-primary">
                  Book an Appointment
                </h3>

                <form onSubmit={submitHandler}>
                  {/* Treatment Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Treatment Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter treatment name"
                      name="tname"
                      onChange={onchangeData}
                      value={bookAppointmentData.tname}

                    />
                  </div>

                  {/* Location */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter location"
                      name="location"
                       onChange={onchangeData}
                       value={bookAppointmentData.location}
                    />
                  </div>

                  {/* Doctor Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Doctor Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter doctor name"
                     name="doctorName"
                      onChange={onchangeData}
                      value={bookAppointmentData.doctorName}
                    />
                  </div>

                  {/* Patient Name */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter patient name"
                      name="patientName"
                       onChange={onchangeData}
                    />
                  </div>

                  {/* Patient Email */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Patient Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter patient email"
                      name="patientEmail"
                       onChange={onchangeData}
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Write your issue..."
                      name="message"
                       onChange={onchangeData}
                    ></textarea>
                  </div>

                  {/* Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 rounded-4"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointments;
