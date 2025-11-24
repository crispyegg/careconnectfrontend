


import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ManageHospital = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
     axios.get(`https://careconnectbackend-7h42.onrender.com/associatehospitaluploads`)
     .then((res)=>{
      setData(res.data)
     })
     .catch((err)=>{
      console.log(err);
      
     })

  })

  const deleteOneRecord = (aid)=>{
    axios.delete(`https://careconnectbackend-7h42.onrender.com/associatehospitaluploads/${aid}`)
    .then(()=>{
      alert('Deleted')
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  return (
  <div className="container my-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center fw-bold text-primary mb-4">
               Manage Hospitals
              </h3>

              <div className="table-responsive">
                <table className="table table-hover align-middle text-center">
                  <thead className="table-primary">
                    <tr>
                          
                      <th>Hospital Name</th>       
                      <th>Action</th>       
                    </tr>
                  </thead>
                  <tbody>
                  
                       {
                        data.map((e,id)=>{
                          return(
                             <tr key={id}>                            
                                <td className="fw-semibold">{e.catname}</td>
                                  
                                  <td>                            

                                    <button className="btn btn-sm btn-outline-danger" onClick={()=>{
                                      deleteOneRecord(e._id)
                                    }} >
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
      
  )
}

export default ManageHospital