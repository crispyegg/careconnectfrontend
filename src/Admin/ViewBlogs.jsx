import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

const ViewBlogs = () => {
  const [blogData, setblogData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://careconnectbackend-7h42.onrender.com/blogs`)
      .then((res) => {
        setblogData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const deleteOneRecord = (bid) => {
    axios
      .delete(`https://careconnectbackend-7h42.onrender.com/blogs/${bid}`)
      .then((res) => {
        alert("blog Deleted");
      })
      .catch((err) => {
        alert("unable to deleted");
      });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h3 className="fw-bold text-primary">Manage Blogs</h3>
        <p className="text-muted small">
          Edit, update, or delete your blog posts with ease.
        </p>
        <hr className="w-25 mx-auto border-2 border-primary opacity-75" />
      </div>

      <div className="table-responsive shadow rounded-4">
        <table className="table align-middle table-hover mb-0">
          <thead className="table-primary text-center">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {blogData.map((e,id) => {
              return (
                <tr key={id}>
                  <td className="fw-semibold text-start">{e.title}</td>
                  <td className="text-muted small text-start">
                    {e.description}
                  </td>
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
  );
};

export default ViewBlogs;
