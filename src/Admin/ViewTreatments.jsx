

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ViewTreatments = () => {
  const [tdata,settdata]=useState([]);

  const [singleTdata ,setsingleTdata] = useState({_id:'', timage:'' , tname:'' , tdescription:''})


  useEffect(()=>{
    axios.get(`https://careconnectbackend-7h42.onrender.com/addtreatment/`)
    .then((res)=>{
      settdata(res.data)
    }).catch((err)=>{
      console.log(err);   
    })
  },[])
  

   const deleteTreatmentData = (tid)=>{
    axios.delete(`https://careconnectbackend-7h42.onrender.com/addtreatment/${tid}`)
    .then((res)=>{
      alert('data deleted succesfully')
    })
    .catch((err)=>{
      alert("unable to delete")
      
    })
   }
   
 const getOneRecord = (tid) => {
  axios.get(`https://careconnectbackend-7h42.onrender.com/addtreatment/${tid}`)
    .then((res) => {
      console.log("Single Record:", res.data);

      
      if (res.data._id) {
        setsingleTdata(res.data);
      }

    
      else if (res.data) {
        setsingleTdata(res.data);
      }
    })
    .catch((err) => console.log(err));
};
   
   const submitHandler = (e) =>{
       e.preventDefault()
       axios.put(`https://careconnectbackend-7h42.onrender.com/addtreatment/${singleTdata._id}`,singleTdata)
       .then(()=>{
        alert('data updated')
       })
       .catch((err)=>{
        console.log(err);
        
       })
   }

   const changeData = (e)=>{
      
      setsingleTdata({...singleTdata, [e.target.name]: e.target.value })
    }
   const{ timage , tname , tdescription} = singleTdata

  return (
    <>
        <div className="container my-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center fw-bold text-primary mb-4">
                View Treatments
              </h3>

              <div className="table-responsive">
                <table className="table table-hover align-middle text-center">
                  <thead className="table-primary">
                    <tr>
                    
                    
                      <th>Treatment Name</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                       {
                        tdata.map((e,id)=>{
                          return(
                             <tr key={id}>                            
                                <td className="fw-semibold">{e.tname}</td>
                                    <td className="text-muted small">
                                        {e.tdescription}
                                          </td>
                                  <td>
                                    <button className="btn btn-sm btn-outline-primary me-2" onClick={()=>getOneRecord(e._id)} data-bs-toggle="modal" data-bs-target="#editTreatmentModal">
                                          <i className="bi bi-pencil-square"></i>
                                    </button>

                                    <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteTreatmentData(e._id)}>
                                            <i className="bi bi-trash"></i>
                                    </button>
                                  </td>
                              </tr>
                          )
                        })
                       }
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
              className="modal fade"
            id="editTreatmentModal"
            tabIndex="-1"
            aria-labelledby="editTreatmentModalLabel"
            aria-hidden="true"
          >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            
            {/* Modal Header */}
            <div className="modal-header bg-primary text-white rounded-top-4">
              <h5 className="modal-title fw-semibold" id="editTreatmentModalLabel">
                Edit Treatment
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body p-4">
              <form onSubmit={submitHandler}>
                 
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Treatment Image
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='timage'
                    value={timage}
                    placeholder='ImagePath'
                    onChange={changeData}
                  />
                </div>

                 <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Treatment Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='tname'
                    value={tname} 
                    onChange={changeData}
                    placeholder="Enter treatment name"
                  />
                </div>

           
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    name='tdescription'
                    value={tdescription}
                    onChange={changeData}
                    rows="4"
                    placeholder="Enter treatment description"
                  ></textarea>
                </div>
             
                 <div className="modal-footer border-0">
                  <button type="submit" className="btn btn-primary rounded-pill px-4">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

          
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewTreatments