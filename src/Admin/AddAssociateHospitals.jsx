import React from "react";
import { useState } from "react";
import axios from "axios";

const AddAssociateHospitals = () => {
  const [imagedata, setimagedata] = useState({ path: "", catname: "" });

  const addfileData = (e) => {
    setimagedata({ ...imagedata, path: e.target.files[0] });
  };

  const changeHandler = (e) => {
    setimagedata({ ...imagedata, catname: e.target.value });
  };

  const addimagedata = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("image", imagedata.path);
    formdata.append("catname", imagedata.catname);

    axios
      .post(`https://careconnectbackend-7h42.onrender.com/associatehospitaluploads`, formdata)
      .then(() => {
        alert("added");
      })
      .catch(() => {
        alert("failed");
      });
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold text-primary">
          Add Associate Hospital
        </h3>

        <form onSubmit={addimagedata}>

          {/* Image Input */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Hospital Image
            </label>
            <input
              type="file"
              className="form-control form-control-lg"
              name="path"
              onChange={addfileData}
            />
          </div>

          {/* Hospital Name */}
          <div className="mb-4">
            <label className="form-label fw-semibold">
              Hospital Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter hospital name"
              name="catname"
              onChange={changeHandler}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary rounded-pill px-5 py-2 fw-semibold">
              Add
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddAssociateHospitals;
