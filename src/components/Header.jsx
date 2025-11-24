import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/care logo.png'
import headerstyles from '../components/header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={`navbar navbar-expand-lg navbar-dark ${headerstyles.navbar}`}>
        <div className="container">
          {/* Brand / Logo */}
          <NavLink className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={logo} alt="logo" className={headerstyles.logo} />
            <span className="ms-2">Care<span className="text-success">Connect</span></span>
          </NavLink>

          {/* Toggle for Mobile */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 align-items-lg-center">
              <li className="nav-item">
                <NavLink className={`nav-link ${headerstyles.navLink}`} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${headerstyles.navLink}`} to="/treatments">Treatments</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${headerstyles.navLink}`} to="/bookappointment">Book Appointment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${headerstyles.navLink}`} to="/offers">Offers</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${headerstyles.navLink}`} to="/blogs">Blogs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link ${headerstyles.navLink}`} to="/contactus">Contact Us</NavLink>
              </li>

              {/* Admin Login Button */}
              <li className="nav-item ms-lg-3">
                <NavLink
                  to="/adminlogin"
                  className="btn btn-outline-success d-flex align-items-center gap-2 px-3 py-2 fw-semibold"
                >
                  <i className="bi bi-person-lock"></i> Admin Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
