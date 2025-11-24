import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../App";
import { useNavigate } from "react-router-dom";

const ManageOffers = () => {
   const { token, setShowLayout } = useContext(Store);
  const [data, setdata] = useState([]);
  const navigate=useNavigate();

  const [singleData ,setsingleData] = useState({treatmentName:'',treatmentDetails:'', treatmentpackage1:'', treatmentpackage2:'', treatmentpackage3:'',price:'',date:''})

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/offers`)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[singleData]);

  const deleteOneRecord = (oid) => {
    axios
      .delete(`https://careconnectbackend-7h42.onrender.com/offers/${oid}`)
      .then(() => {
        alert(`offers Deleted`);
      })
      .catch((err) => {
        alert(`unable to delete`);
      });
  };



  const getOneReocord = (oid) =>{
    axios.get(`https://careconnectbackend-7h42.onrender.com/offers/${oid}`)
    .then((res)=>{
      setsingleData(res.data)
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  const  submitHandler =(e)=>{
    e.preventDefault();
    axios.put(`https://careconnectbackend-7h42.onrender.com/offers/${singleData._id}`,singleData)
    .then(()=>{
        alert(`updated`)
        navigate("/admindashboard/manageoffers")
        
    })
    .catch((err)=>{
      alert(`update Failed`)
    })

  }
  

  const changeData =(e)=>{
        setsingleData({...singleData,[e.target.name]:e.target.value})
  }

  const {treatmentName, treatmentDetails , treatmentpackage1 , treatmentpackage2 , treatmentpackage3 , price , date} = singleData
  return (
    <div>
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-primary">Manage Offers</h2>

        {/* Table Section */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h4 className="mb-3 text-secondary">Offers List</h4>
            <div className="table-responsive">
              <table className="table table-hover align-middle text-center">
                <thead className="table-primary">
                  <tr>
                    <th>Treatment Name</th>
                    <th>Details</th>
                    <th>Package 1</th>
                    <th>Package 2</th>
                    <th>Package 3</th>
                    <th>Price (₹)</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((e, id) => (
                    <tr key={id}>
                      <td>{e.treatmentName}</td>
                      <td>{e.treatmentDetails}</td>
                      <td>{e.treatmentpackage1}</td>
                      <td>{e.treatmentpackage2}</td>
                      <td>{e.treatmentpackage3}</td>
                      <td>{e.price}</td>
                      <td>{e.date}</td>
                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn btn-sm btn-outline-primary" onClick={()=>getOneReocord(e._id)} data-bs-toggle="modal"  data-bs-target="#editOfferModal">
                            <i className="bi bi-pencil-square"></i>
                          </button>

                          <button
                            type="submit"
                            onClick={() => deleteOneRecord(e._id)}
                            className="btn btn-sm btn-outline-danger"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                
                </tbody>
              </table>
            </div>
          </div>
        </div>


          {/* Edit Offer Modal */}
                  <div
                    className="modal fade"
                    id="editOfferModal"
                    tabIndex="-1"
                    aria-labelledby="editOfferModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title fw-bold"
                            id="editOfferModalLabel"
                          >
                            Edit Offer
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal" 
                          ></button>
                        </div>
                        <div className="modal-body">
                          <form onSubmit={submitHandler}>
                            <div className="mb-3">

                              <label className="form-label">
                                Treatment Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter treatment name"
                                value={treatmentName}
                                name="treatmentName"
                                onChange={changeData}
                              />
                            </div>

                            <div className="mb-3">
                              <label className="form-label">
                                Treatment Details
                              </label>
                              <textarea
                                className="form-control"
                                rows="2"
                                placeholder="Enter details"
                                value={treatmentDetails}
                                name="treatmentDetails"
                                 onChange={changeData}
                              ></textarea>
                            </div>

                            <div className="row">
                              <div className="col-md-4 mb-3">
                                <label className="form-label">Package 1</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Basic"
                                  value={treatmentpackage1}
                                  name='treatmentpackage1'
                                   onChange={changeData}
                                />
                              </div>

                              <div className="col-md-4 mb-3">
                                <label className="form-label">Package 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Standard"
                                  value={treatmentpackage2}
                                  name='treatmentpackage2'
                                   onChange={changeData}
                                />
                              </div>

                              <div className="col-md-4 mb-3">
                                <label className="form-label">Package 3</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Premium"
                                   value={treatmentpackage3}
                                  name='treatmentpackage3'
                                   onChange={changeData}
                                />
                              </div>

                            </div>
                            <div className="mb-3">
                              <label className="form-label">Price (₹)</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter price"
                                value={price}
                                name="price"
                                 onChange={changeData}
                              />
                            </div>

                            <div className="mb-3">
                              <label className="form-label">Date</label>
                              <input type="text" className="form-control" value={date} name="date"  onChange={changeData}/>
                            </div>


                            
                          <button type="submit" className="btn btn-primary d-block mx-auto mt-3">
                            Save Changes
                          </button>
                          </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>
      </div>
    </div>
  );
};

export default ManageOffers;
