import React, { useContext, useEffect, useState } from "react";
import loginpic from "../assets/adminLogin.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../App";

const AdminLogin = () => {
  const { token, settoken, setShowLayout } = useContext(Store);

  const [adminLoginData, setadminLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

    useEffect(() => {
    setShowLayout(false);
  });

  const adminOnchange = (e) => {
    setadminLoginData({ ...adminLoginData, [e.target.name]: e.target.value });
  };

  const adminLogin = (e) => {
    e.preventDefault();
    axios
      .post(`https://careconnectbackend-7h42.onrender.com/adminlogin`, adminLoginData)
      .then((res) => {
        if (res.data.message === "user not found") {
          alert("user not found");
        } else if (res.data.message === "incorrect password") {
          alert("incorrect password");
        } else {
          //navigate("/admindashboard");
          settoken(res.data.token);
        }
      });
  };

  if (token) {
    navigate("/admindashboard");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 shadow rounded-4 overflow-hidden p-0">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={loginpic}
                className="img-fluid w-100 h-100 object-fit-cover"
                alt="loginPic"
              />
            </div>

            <div className="col-md-6 bg-light d-flex align-items-center">
              <div className="w-100 p-5">
                <h2 className="text-center mb-5 text-primary fw-bold">
                  Admin Login
                </h2>

                <form onSubmit={adminLogin}>
                  <div className="mb-4">
                    <input
                      name="email"
                      className="form-control  rounded-5 shadow-sm"
                      type="text"
                      placeholder="Enter Email"
                      onChange={adminOnchange}
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="password"
                      className="form-control  rounded-5 shadow-sm"
                      type="password"
                      placeholder="Password"
                      onChange={adminOnchange}
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <input
                      className="btn btn-primary  w-50 fw-bold rounded-pill"
                      type="submit"
                      value="Login"
                    />
                    <input
                      className="btn btn-danger w-50 fw-bold rounded-pill"
                      type="reset"
                      value="Cancel"
                    />
                  </div>

                  <div className="d-flex justify-content-evenly mt-5">
                    <div className="text-center mt-3 rounded-pill shadow p-3">
                      <Link
                        to="/forgotpassword"
                        className="text-decoration-none text-muted"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center mt-3 shadow rounded-pill  p-3">
                      <Link
                        to="/registeruser"
                        className="text-decoration-none  text-muted"
                      >
                        Resgister new user
                      </Link>
                    </div>
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

export default AdminLogin;
