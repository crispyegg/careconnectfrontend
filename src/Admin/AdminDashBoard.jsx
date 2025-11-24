import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Store } from "../App";
import axios from "axios";

const AdminDashBoard = () => {
  const [data, setdata] = useState("");

  const { token, setShowLayout } = useContext(Store);

  const navigate = useNavigate();

  // Hide header & footer
  setShowLayout(false);

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/admindashboard/`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setdata(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (!token) {
    navigate("/adminlogin");
  }

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* ---------- SIDEBAR ---------- */}
        <aside className="col-lg-3 col-md-4 bg-light border-end vh-100 overflow-auto">
          <div className="p-4">

            <h4 className="text-center fw-bold mb-4 text-success">
              Admin Menu
            </h4>

            <div className="d-grid gap-3">

              <NavLink to="addtreatment" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Add Treatment
                </button>
              </NavLink>

              <NavLink to="viewtreatments" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  View Treatments
                </button>
              </NavLink>

              <NavLink to="addlocation" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Add Location
                </button>
              </NavLink>

              <NavLink to="viewlocations" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  View Locations
                </button>
              </NavLink>

              <NavLink to="viewappointments" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Booked Appointments
                </button>
              </NavLink>

              <NavLink to="adddoctors" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Add Doctor
                </button>
              </NavLink>

              <NavLink to="addblogs" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Add Blogs
                </button>
              </NavLink>

              <NavLink to="viewblogs" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  View Blogs
                </button>
              </NavLink>

              <NavLink to="managecontact" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Manage Contact
                </button>
              </NavLink>

              <NavLink to="manageoffers" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Manage Offers
                </button>
              </NavLink>

              <NavLink to="associatehospital" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Add Associate Hospital
                </button>
              </NavLink>

              <NavLink to="managehospitals" className="text-decoration-none">
                <button className="btn btn-outline-success w-100 rounded-pill py-2">
                  Manage Hospital
                </button>
              </NavLink>

            </div>
          </div>
        </aside>

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="col-lg-9 col-md-8 bg-white">
          <div className="p-4">
            <h3 className="text-center fw-bold pb-3 border-bottom">
              Welcome to Admin Dashboard
            </h3>

            <div className="mt-4">
              <Outlet />
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default AdminDashBoard;
