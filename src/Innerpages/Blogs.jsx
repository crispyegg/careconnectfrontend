import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://careconnectbackend-7h42.onrender.com/blogs")
      .then((res) => {
        setblogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container py-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary">Our Blogs</h2>
        <p className="text-muted">
          Stay updated with the latest health tips, wellness guides, and medical
          insights from CareConnect.
        </p>
        <hr className="w-25 mx-auto border-2 border-primary opacity-75" />
      </div>

      {/* Blog Cards */}
      <div className="row g-4">
        {blogs.map((e, id) => (
          <div key={id} className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white hover-shadow">
              <div className="ratio ratio-16x9">
                <img
                  src={e.image}
                  className="card-img-top img-fluid object-fit-cover"
                  alt={e.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">{e.title}</h5>
                <p className="card-text text-muted small mb-3">
                  {e.description}
                </p>
                <NavLink className="btn btn-outline-primary btn-sm rounded-pill px-3 stretched-link">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
