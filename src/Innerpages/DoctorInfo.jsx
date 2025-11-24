import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const DoctorInfo = () => {
  const [doctors, setdoctors] = useState([]);
  

  const {tname,location} = useParams();
  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/adddoctors/${tname}/${location}`)
      .then((res) => {
        setdoctors(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tname,location]);

  

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold text-success mb-5">Our Doctors</h2>

      <div className="row g-4 justify-content-center">
        {doctors.map((e, id) => (
          <div key={id} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 border-success border-2 rounded-4 shadow-lg doctor-card">
              <div className="card-body text-center p-4">
                {/* Avatar */}
                <div className="d-flex justify-content-center mb-3">
                  <div className="rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center doctor-avatar">
                    <i className="bi bi-person-circle text-success fs-1"></i>
                  </div>
                </div>

                {/* Doctor Info */}
                <h4 className="fw-bold text-success mb-1">{e.doctorName}</h4>
                <p className="text-muted mb-2">{e.qualification}</p>
                <p className="fw-semibold text-primary mb-3">{tname}</p>

                {/* Badges */}
                <div className="d-flex justify-content-center gap-2 mb-3">
                  <span className="badge bg-info text-dark px-3 py-2">
                    {e.experience}+ yrs Exp
                  </span>
                  <span className="badge bg-success text-light px-3 py-2">
                    Available
                  </span>
                </div>

                {/* Contact Info */}
                <div className="text-start small mb-3">
                  <p className="mb-1">
                    <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                    {location}
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-telephone-fill text-primary me-2"></i>
                    {e.phoneNumber}
                  </p>
                  <p className="mb-1">
                    <i className="bi bi-envelope-fill text-success me-2"></i>
                    {e.email}
                  </p>
                </div>

                {/* Description */}
                <p className="text-secondary mb-3">{e.message}</p>

                {/* Button */}


                <NavLink to={`/bookappointment/${tname}/${location}/${e.doctorName}`}>
                      <button className="btn btn-outline-primary w-100 fw-semibold">
                       Book Appointment
                    </button>
                </NavLink>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorInfo;
