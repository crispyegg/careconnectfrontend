import axios from "axios";
import React, { useState } from "react";

const ContactUs = () => {

  const [contact,setcontact]= useState({fullName:'', email:'' , subject:'',phone:'', message:''})

  const changeHandler = (e)=>{
     setcontact({...contact,[e.target.name]:e.target.value})
  }

  const submitHandler= (e)=>{
        e.preventDefault()
        axios.post(`https://careconnectbackend-7h42.onrender.com/contactus`,contact)
        .then(()=>{
          alert(' We respond within 24 hours!')
        })
        .catch(()=>{
          console.log('not posted');
          
        })
  }
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row shadow-lg rounded-4 overflow-hidden">
            
          
            <div className="col-md-5 bg-success text-white d-flex flex-column justify-content-center p-5">
              <h3 className="fw-bold mb-4 text-center">Get in Touch</h3>
              
              <div className="mb-4">
                <h6 className="fw-semibold">📍 Address</h6>
                <p className="mb-1">CareConnect Center</p>
                <p className="small opacity-75 mb-0">
                  12th Cross Road, Banjara Hills, Hyderabad
                </p>
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold">📞 Phone</h6>
                <p className="mb-0">+91 98765 43210</p>
              </div>

              <div className="mb-4">
                <h6 className="fw-semibold">✉️ Email</h6>
                <p className="mb-0">support@careconnect.com</p>
              </div>

              <div className="text-center mt-4">
                <p className="small mb-0 opacity-75">
                  We respond within 24 hours!
                </p>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="col-md-7 bg-light p-5">
              <h2 className="fw-bold text-primary mb-3 text-center">
                Contact Us
              </h2>
              <p className="text-muted text-center mb-4">
                Have a question or need help? Fill out the form and we’ll get
                back to you shortly.
              </p>

              <form onSubmit={submitHandler}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      className="form-control rounded-3 shadow-sm"
                      placeholder="Your Name"
                      name="fullName"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control rounded-3 shadow-sm"
                      placeholder="Your Email"
                      name="email"
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className="row g-3 mt-1">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Subject</label>
                    <input
                      type="text"
                      className="form-control rounded-3 shadow-sm"
                      placeholder="Subject"
                      name="subject"
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone</label>
                    <input
                      type="tel"
                      className="form-control rounded-3 shadow-sm"
                      placeholder="Your Phone Number"
                      name="phone"
                      onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control rounded-3 shadow-sm"
                    rows="4"
                    placeholder="Write your message..."
                    name="message"
                    onChange={changeHandler}
                  ></textarea>
                </div>

                <div className="text-center mt-4">
                  <button className="btn btn-primary px-4 py-2 rounded-4 fw-semibold shadow-sm">
                    Send Message
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

export default ContactUs;
