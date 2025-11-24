import React, { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const BookTreatment = () => {
  const { tid, tname } = useParams();

  const [locationData, setlocationData] = useState([]);
  const [tData, settData] = useState("");

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/addlocation/`)
      .then((res) => {
        const filtered = res.data.filter((e) => {
          if (e.tname === tname) {
            return true;
          } else {
            return false;
          }
        });
        setlocationData(filtered);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://careconnectbackend-7h42.onrender.com/addtreatment/${tid}`)
      .then((res) => {
        settData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tid, tname]);

  const [bookloc, setbookloc] = useState({ tname: tname, location: "" });

  const changeHandler = (e) => {
    setbookloc({ ...bookloc, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://careconnectbackend-7h42.onrender.com/booktreatment`, bookloc)
      .then(() => {
        alert("Check Doctor");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container my-5">
      <div className="row shadow-lg rounded-4 overflow-hidden">
        <div className="col-md-6 p-0">
          <img
            alt="Treatment"
            className="img-fluid w-100 h-100 object-fit-cover"
          src={`https://careconnectbackend-7h42.onrender.com/${tData.timage?.replace(/\\/g, "/").replace("public/", "")}`}

          />
        </div>

        <div className="col-md-6 d-flex align-items-center bg-light">
          <div className="w-100 p-5">
            <h3 className="text-primary fw-bold text-center">
              See Treatment Location
              <hr className="border border-dark border-w opacity-75"></hr>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="my-3">
                <label className="form-label fw-semibold">Treatment Name</label>
                <input
                  type="text"
                  className="form-control fw-bold text-success "
                  name="tname"
                  value={tname}
                />
              </div>

              <div>
                <label className="form-label  fw-semibold">
                  Available location's
                </label>
                <input
                  list="location"
                  name="location"
                  className="form-control"
                  onChange={changeHandler}
                />
                <datalist id="location">
                  {locationData.map((e, id) => {
                    return <option key={id} value={e.location} />;
                  })}
                </datalist>
              </div>

              <div className="d-grid  mx-auto mt-5">
                <NavLink to={`/doctorinfo/${tname}/${bookloc.location}`}>
                  <button
                    type="submit"
                    className="btn d-block mx-auto btn-primary btn-lg rounded-3 shadow"
                  >
                    See Location
                  </button>
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTreatment;
