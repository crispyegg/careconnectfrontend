import React, { useContext, useState } from "react";
import resgistorimg from "../assets/resgistoruser.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../App";

const RegistorUser = () => {
  const { setShowLayout } = useContext(Store)

  const [resgisterData, setregistorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    designation: "",
    message: "",
  });

  const navigate = useNavigate();

  setShowLayout(false);

  const changeData = (e) => {
    setregistorData({ ...resgisterData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (resgisterData.password !== resgisterData.confirmPassword) {
      alert("password not matching");
    } else {
      axios
        .post(`https://careconnectbackend-7h42.onrender.com/registeruser/`, resgisterData)
        .then((res) => {
          alert(" user Registered ")
          navigate('/adminlogin')
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container my-5">
      <div className="row shadow-lg rounded overflow-hidden">
        <div className="col-md-4 p-0">
          <img
            src={resgistorimg}
            alt="Register"
            className="img-fluid h-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="col-md-8 bg-light p-5">
          <h3 className="text-center mb-4 fw-bold">Register User</h3>

          <form onSubmit={submitHandler}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Enter first name"
                  onChange={changeData}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Enter last name"
                  onChange={changeData}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  onChange={changeData}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter phone number"
                  name="phone"
                  onChange={changeData}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={changeData}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  name="confirmPassword"
                  onChange={changeData}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation"
                  name="designation"
                  onChange={changeData}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your message"
                name="message"
                onChange={changeData}
              />
            </div>

            <div className="d-flex justify-content-end gap-3">
              <button type="reset" className="btn btn-secondary px-4">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary px-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistorUser;
