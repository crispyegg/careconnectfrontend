import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageContact = () => {
  const [contactData, setcontactData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/contactus`)
      .then((res) => {
        setcontactData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteOneRecord=(cid)=>{
    axios.delete(`https://careconnectbackend-7h42.onrender.com/contactus/${cid}`)
    .then(()=>{
      alert('Deleted')
    })
    .catch((err)=>{
      console.log(err);    
    })
  }

  return (
    <div>
      <div className="container py-5">
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Manage Contact Us</h3>

          <hr className="w-25 mx-auto border-2 border-primary opacity-75" />
        </div>

        <div className="table-responsive shadow rounded-4">
          <table className="table align-middle table-hover mb-0">
            <thead className="table-primary text-center">
              <tr>
                <th>FullName</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {contactData.map((e, id) => {
                return (
                  <tr>
                    <td className="fw-semibold text-start">{e.fullName}</td>
                    <td className="text-muted small text-start">{e.email}</td>
                    <td className="text-muted small text-start">{e.subject}</td>
                    <td className="text-muted small text-start">{e.phone}</td>
                    <td className="text-muted small text-start">{e.message}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteOneRecord(e._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageContact;
