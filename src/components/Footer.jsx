import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row gy-5 justify-content-between">
          {/* Logo & About */}
          <div className="col-md-3">
            <h4 className="fw-bold text-success mb-3">CareConnect</h4>
            <p className="small text-secondary mb-3">
              Empowering health through trusted care and modern technology.
            </p>
            <p className="small mb-1">
              <i className="bi bi-geo-alt-fill text-success me-2"></i>
              Hyderabad, Telangana, India
            </p>
            <p className="small mb-0">
              <i className="bi bi-clock-fill text-success me-2"></i>
              Mon - Sat: 9:00 AM - 8:00 PM
            </p>
          </div>

          {/* Popular Treatments */}
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3 text-uppercase text-success">
              Popular Treatments
            </h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to={'/treatments'} className="text-decoration-none text-light d-block py-1">
                  <i className="bi bi-heart-pulse-fill me-2 text-success"></i>
                  General Health Checkup
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/treatments'} className="text-decoration-none text-light d-block py-1">
                  <i className="bi bi-heart-pulse-fill me-2 text-success"></i>
                  Dental Care
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/treatments'} className="text-decoration-none text-light d-block py-1">
                  <i className="bi bi-heart-pulse-fill me-2 text-success"></i>
                  Diabetes Management
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/treatments'} className="text-decoration-none text-light d-block py-1">
                  <i className="bi bi-heart-pulse-fill me-2 text-success"></i>
                  Physiotherapy Sessions
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3 text-uppercase text-success">
              Quick Links
            </h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to={'/'} className="text-decoration-none text-light d-block py-1 link-opacity-75-hover">
                  <i className="bi bi-chevron-right me-2 text-success"></i>Home
                </Link>
              </li>
             
              <li className="mb-2">
                <Link to={'/blogs'} className="text-decoration-none text-light d-block py-1 link-opacity-75-hover">
                  <i className="bi bi-chevron-right me-2 text-success"></i>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to={'/contactus'} className="text-decoration-none text-light d-block py-1 link-opacity-75-hover">
                  <i className="bi bi-chevron-right me-2 text-success"></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3">
            <h5 className="fw-semibold mb-3 text-uppercase text-success">
              Contact Us
            </h5>
            <p className="small mb-1">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              +91 98765 43210
            </p>
            <p className="small mb-3">
              <i className="bi bi-envelope-fill text-success me-2"></i>
              support@careconnect.com
            </p>

            <div className="d-flex gap-3">
              <Link className="text-light fs-5 link-light link-opacity-75-hover">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link className="text-light fs-5 link-light link-opacity-75-hover">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link className="text-light fs-5 link-light link-opacity-75-hover">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link className="text-light fs-5 link-light link-opacity-75-hover">
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-secondary mt-5 mb-3 opacity-50" />
        <div className="d-flex justify-content-between align-items-center small text-secondary flex-wrap">
          <div>
            © <span className="text-success fw-semibold">CareConnect</span> — All rights reserved.
          </div>
          <div>
            <span className="text-success">Designed by </span>
            <span className="fw-semibold text-light">Ashif Khan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
