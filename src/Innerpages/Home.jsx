import React from "react";
import Treatments from "./Treatments";
import banner1 from "../assets/BannerHomepage.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/Banner3.jpg";
import styles from "./Home.module.css";
import QuickAppoint from "./QuickAppoint";
import { Link, NavLink } from "react-router-dom";
import Hospitals from "./Hospitals";

const Home = () => {
  return (
    <div>
      {/* ===== Carousel Section ===== */}
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={banner1}
              className={`d-block w-100 img-fluid ${styles.carouselImg}`}
              alt="Healthcare Banner"
            />
            <div
              className={`carousel-caption d-none d-md-block ${styles.carouselCaption}`}
            >
              <h2>Your Health, Our Priority</h2>
              <p>Trusted doctors and modern care for every family.</p>

              <NavLink to={`/bookappointment`}>

              <button className="btn btn-success px-4 rounded-pill shadow-sm">
                Book Appointment
              </button>
              </NavLink>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={banner2}
              className={`d-block w-100 img-fluid ${styles.carouselImg}`}
              alt="Wellness Banner"
            />
            <div
              className={`carousel-caption d-none d-md-block ${styles.carouselCaption}`}
            >
              <h2>Comprehensive Health Checkups</h2>
              <p>From diagnosis to recovery — we care for every step.</p>

              <NavLink to={`/treatments`}>

              <button className="btn btn-success px-4 rounded-pill shadow-sm">
                Explore Treatments
              </button>
              </NavLink>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={banner3}
              className={`d-block w-100 img-fluid ${styles.carouselImg}`}
              alt="Doctors Team"
            />
            <div
              className={`carousel-caption d-none d-md-block ${styles.carouselCaption}`}
            >
              <h2>Connecting You to Expert Doctors</h2>
              <p>Find specialists and book your consultation instantly.</p>

              <NavLink to={`/treatments`}>

                  <button className="btn btn-success px-4 rounded-pill shadow-sm">

                    Treatment
                  </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>



      {/* welcome section */}
           <section className="container text-center my-5 py-4">
      <h2 className="fw-bold">
        Welcome to <span className={styles.brand}>CareConnect</span>
      </h2>
      <p className="text-muted mt-3 mb-5">
        CareConnect is a comprehensive healthcare platform that connects patients
        requiring medical or surgical care to our team of physicians and surgeons
        across Hyderabad.
      </p>

      <div className={`row justify-content-center position-relative`}>
        <div className="col-md-3 col-sm-6 mb-4">
          <div className={`p-4 shadow-sm rounded bg-white position-relative `}>
            <h3 className="fw-bold text-muted">01</h3>
            <p className="mt-2">Consultation to assess your condition.</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className={`p-4 shadow-sm rounded bg-white position-relative `}>
            <h3 className="fw-bold text-muted">02</h3>
            <p className="mt-2">Suggestion of all possible treatment/surgical options.</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className={`p-4 shadow-sm rounded bg-white position-relative `}>
            <h3 className="fw-bold text-muted">03</h3>
            <p className="mt-2">Admission and care under our expert team.</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <div className={`p-4 shadow-sm rounded bg-white position-relative `}>
            <h3 className="fw-bold text-muted">04</h3>
            <p className="mt-2">Post care consultation and home care services.</p>
          </div>
        </div>
      </div>
    </section>
     
      
      <hr></hr>
     <Treatments limit={3} />
     
     <QuickAppoint/>

     <hr/>

     <Hospitals/>

      {/* calling button  */}
      <div className="position-fixed bottom-0 end-0 p-3">
        <Link
          to="tel:+919876543210"
          className="btn btn-success rounded-circle d-flex align-items-center justify-content-center shadow"
          style={{ width: "60px", height: "60px" }}
        >
          <i className="bi bi-telephone-fill fs-4 text-white"></i>
        </Link>
      </div>

    </div>
  );
};

export default Home;
