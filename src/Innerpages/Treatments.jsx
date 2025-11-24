import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Treatments = ({ limit }) => {
  const [tdata, setTdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/addtreatment/`)
      .then((res) => {
        const data = limit ? res.data.slice(0, limit) : res.data;
        setTdata(data);
      })
      .catch(() => alert("Unable to get treatment data"));
  }, [limit]);

  return (
    <>   
        <div className="text-center mb-4">
          <div className="container">
          
            <h1 className="fw-bold text-success">Our Treatments</h1>
            <hr></hr>
            <p className="text-muted">
              Comprehensive care tailored for your health and well-being
            </p>
          </div>
        </div>
    

     
      <div className="container my-5">
        <div className="row g-4">
          {tdata.map((e, id) => (
            <div className="col-sm-6 col-md-4 d-flex" key={id}>
              <div className="card flex-fill text-center border-0 shadow-sm rounded-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-between">
                  <img
                   src={`https://careconnectbackend-7h42.onrender.com/treatmentUploads/${e.filename}`}
                    alt="Treatment"
                    className="img-fluid rounded-4 mb-3"
                  />
                  <div>
                    <h5 className="card-title fw-semibold">{e.tname}</h5>
                    <p className="card-text text-muted small">
                      {e.tdescription}
                    </p>
                  </div>
                  <NavLink to={`/booktreatment/${e._id}/${e.tname}`}>
                    <button className="btn btn-primary rounded-pill px-4 mt-2">
                      Book
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Treatments;
