import React, { useState } from "react";
import axios from "axios";

const AddTreatment = () => {
  const [treatmentData, settreatmenData] = useState({
    timage: "",
    tname: "",
    tdescription: "",
  });

  
  const addfileData = (e) => {
    e.preventDefault();
    settreatmenData({ ...treatmentData, timage: e.target.files[0] });  
  };

  const changeData = (e) => {
    settreatmenData({ ...treatmentData, [e.target.name]: e.target.value });
  };

  const addTreatmentData = (e) => {
    e.preventDefault();
     const formdata = new FormData();
    formdata.append("timage", treatmentData.timage);   
    formdata.append("tname", treatmentData.tname );
    formdata.append("tdescription", treatmentData.tdescription);
  

    axios
      .post(`https://careconnectbackend-7h42.onrender.com/addtreatment`, formdata)
      .then((res) => {
        if (res.data === "New Treatment added succesfully") {
          alert("New Treatment added succesfully");
        } else if (res.data === "service is already available") {
          alert("Treament Already Avialable");
        }else{
          alert('treatment Added')
        }
      })

      .catch(() => {
        alert(" treatment addition failed ");
      });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm border-4 rounded-4 p-4">
              <h2 className="mb-4 text-center fw-bold">Add Treatment</h2>
              <form    onSubmit={addTreatmentData}>
                {/* Treatment Image */}
                <div className="mb-3">
                  <label htmlFor="ImagePath" className="form-label fw-semibold">
                    Treatment Image
                  </label>
                  <input
                   onChange={addfileData}
                    type="file"
                    className="form-control"   
                    placeholder="Image"
                    name="timage"
                  />
                </div>
            
                <div className="mb-3">
                  <label
                    htmlFor="treatmentName"
                    className="form-label fw-semibold"
                  >
                    Treatment Name
                  </label>
                  <input
                    onChange={changeData}
                    type="text"
                    className="form-control"
                    placeholder="Enter treatment name"
                    name="tname"
                  />
                </div>

               
                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="form-label fw-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    onChange={changeData}
                    className="form-control"
                    id="description"
                    rows="4"
                    placeholder="Enter treatment description"
                    name="tdescription"
                  ></textarea>
                </div>

             
                <div className="d-flex justify-content-between">
                  <button
                    type="reset"
                    className="btn btn-secondary rounded-pill px-4"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4"
                  
                  >
                    Add Treatment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTreatment;
