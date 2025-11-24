import axios from "axios";
import React, { useEffect, useState } from "react";

import "datatables.net-dt/css/dataTables.dataTables.min.css";
import DataTable from "datatables.net-dt/js/dataTables.dataTables.js";
import $ from "jquery";

const ViewAppointments = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [singleData, setSingleData] = useState({
    tname: "",
    location: "",
    doctorName: "",
    patientName: "",
    patientEmail: "",
    message: "",
    status: "Pending",
  });

  useEffect(() => {
    fetchAppointments();

    setTimeout(() => {
      $(function () {
        new DataTable("#myTable");
      });
    }, 500);
  }, []);

  const fetchAppointments = () => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/bookappointment`)
      .then((res) => setAppointmentData(res.data))
      .catch((err) => console.log(err));
  };

  const deleteOneRecord = (bid) => {
    axios
      .delete(`https://careconnectbackend-7h42.onrender.com/bookappointment/${bid}`)
      .then(() => {
        alert("Appointment Deleted");
        setAppointmentData((prev) => prev.filter((item) => item._id !== bid));
      })
      .catch((err) => console.log(err));
  };

  const getOneRecord = (bid) => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/bookappointment/${bid}`)
      .then((res) => setSingleData(res.data))
      .catch((err) => console.log(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://careconnectbackend-7h42.onrender.com/bookappointment/${singleData._id}`, singleData)
      .then(() => {
        alert("Data updated successfully!");
        // Update table data immediately
        setAppointmentData((prev) =>
          prev.map((item) =>
            item._id === singleData._id ? { ...item, ...singleData } : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const changeHandler = (e) => {
    setSingleData({ ...singleData, [e.target.name]: e.target.value });
  };

  const {
    tname,
    doctorName,
    location,
    patientName,
    patientEmail,
    message,
    status,
  } = singleData;

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-4">
          <h3 className="text-center fw-bold text-primary mb-4">
            View Booked Appointments
          </h3>

          <div className="table-responsive">
            <table className="table table-hover align-middle text-start" id="myTable">
              <thead className="table-primary">
                <tr>
                  <th>Treatment Name</th>
                  <th>Location</th>
                  <th>Doctor Name</th>
                  <th>Patient Name</th>
                  <th>Patient Email</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-start ps-5">
                {appointmentData.map((e, id) => (
                  <tr key={id}>
                    <td className="fw-semibold">{e.tname}</td>
                    <td className="text-muted small">{e.location}</td>
                    <td className="text-muted small">{e.doctorName}</td>
                    <td className="text-muted small">{e.patientName}</td>
                    <td className="text-muted small">{e.patientEmail}</td>
                    <td className="text-muted small">{e.message}</td>

                    <td>
                      <span
                        className={`badge rounded-pill ${
                          e.status === "Pending"
                            ? "bg-warning text-dark"
                            : e.status === "In Progress"
                            ? "bg-info text-dark"
                            : "bg-success text-white"
                        }`}
                      >
                        {e.status || "Pending"} 
                      </span>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        data-bs-toggle="modal"
                        data-bs-target="#editAppointmentModal"
                        onClick={() => getOneRecord(e._id)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger rounded-pill"
                        onClick={() => deleteOneRecord(e._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editAppointmentModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header bg-primary text-white rounded-top-4">
              <h5 className="modal-title fw-semibold">Edit Appointment</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-4">
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Treatment Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="tname"
                    value={tname}
                    onChange={changeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={location}
                    onChange={changeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Doctor Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="doctorName"
                    value={doctorName}
                    onChange={changeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Patient Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="patientName"
                    value={patientName}
                    onChange={changeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Patient Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="patientEmail"
                    value={patientEmail}
                    onChange={changeHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    name="message"
                    value={message}
                    onChange={changeHandler}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Status</label>
                  <select
                    className="form-select"
                    name="status"
                    value={status}
                    onChange={changeHandler}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Finished</option>
                  </select>
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
    </div>
  );
};

export default ViewAppointments;
