import React, { useState } from "react";
import axios from "axios";

const AddBlogs = () => {

  const [blog ,setblog] = useState({title:'',image:'',description:'',  content:''})

  const changeData=(e)=>{
     setblog({...blog,[e.target.name]:e.target.value})
  }
  
  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post(`https://careconnectbackend-7h42.onrender.com/blogs`,blog)
    .then(()=>{
      alert(`Blogs posted`)
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-7 col-lg-6">
          <div className="card border-0 shadow rounded-4">
            <div className="card-body p-4">
              <h4 className="text-center fw-bold text-primary mb-2">
                Add New Blog
              </h4>
              <p className="text-center text-muted small mb-4">
                Share your latest insights and updates.
              </p>

              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label fw-semibold small">Title</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3"
                    placeholder="Enter blog title"
                    onChange={changeData}
                    name="title"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">Image URL</label>
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-3"
                    placeholder="Paste image URL"
                    onChange={changeData}
                    name="image"
                    
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">
                    Short Description
                  </label>
                  <textarea
                    className="form-control form-control-sm rounded-3"
                    rows="2"
                    placeholder="Enter a short description..."
                    onChange={changeData}
                    name="description"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold small">Content</label>
                  <textarea
                    className="form-control form-control-sm rounded-3"
                    rows="4"
                    placeholder="Write your full blog content here..."
                    onChange={changeData}
                    name="content"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm px-4 rounded-3"
                  >
                    Submit Blog
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

export default AddBlogs;
