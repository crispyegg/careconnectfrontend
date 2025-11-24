import React, { useEffect, useState } from "react";
import axios from "axios";

const Hospitals = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/associatehospitaluploads`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container py-5">
      <h3 className="text-center mb-5 fw-bold text-secondary">
        Hospitals Associated With Us
      </h3>

      <div className="row g-4">
        {data.map((e, id) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3" key={id}>
              <div className="card shadow-sm border-0 h-100 text-center rounded-4 hover-shadow transition">

                {/* Image Box with inline height */}
                <div
                  className="overflow-hidden rounded-top"
                  style={{ height: "180px" }}
                >
                  <img
                    src={`https://careconnectbackend-7h42.onrender.com/associatehospitaluploads/${e.filename}`}
                    className="w-100 h-100 object-fit-cover"
                    alt="hospital"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title fw-semibold text-dark">
                    {e.catname}
                  </h5>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hospitals;
