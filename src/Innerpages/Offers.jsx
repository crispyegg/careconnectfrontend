import React, { useEffect, useState } from "react";
import axios from "axios";

const Offers = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/offers`)
      .then((res) => {
        setdata(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);


  

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-primary display-6">Special Offers</h2>
        <p className="text-muted mb-3">
          Check our latest care packages and limited-time discounts — designed
          to keep you healthy without breaking the bank.
        </p>
        <div className="d-flex justify-content-center">
          <div className="border border-2 border-primary rounded-pill px-3 py-1 small text-primary">
            Limited time
          </div>
        </div>
      </div>

      {/* Offers Grid */}

      <div className="row g-4">
        {data.map((e, id) => {
          return (
            <div className="col-sm-6 col-lg-4" key={id}>
              <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
                <div className="p-3 bg-light text-center">
                  <div className="badge bg-success text-white rounded-pill px-3 py-2 mb-2">
                    Best Value
                  </div>
                  <h5 className="fw-bold mb-1">{e.treatmentName}</h5>
                  <p className="text-muted small mb-0">{e.treatmentDetails}</p>
                </div>

                <div className="card-body">
                  <ul className="list-unstyled small mb-3">
                    <li className="mb-2">✔️ {e.treatmentpackage1}</li>
                    <li className="mb-2">✔️ {e.treatmentpackage2}</li>
                    <li className="mb-2">✔️ {e.treatmentpackage3}</li>
                  </ul>

                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="text-muted small">Starting at</div>
                      <div className="fw-bold fs-5 text-primary">{e.price}</div>
                    </div>
                  
                  </div>
                </div>

                <div className="card-footer bg-transparent border-0 small text-muted">
                  <div>Valid till: {e.date}</div>
                </div>
              </div>
            </div>
          );
        })}
 

      
      </div>
    </div>
  );
};

export default Offers;
