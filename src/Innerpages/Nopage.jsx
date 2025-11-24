import React from "react";

const Nopage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "70vh" }}>
      <div className="bg-light p-4 rounded-4 shadow mb-4">
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="404 Not Found"
          className="img-fluid rounded-3"
          style={{ maxWidth: "350px" }}
        />
      </div>
      <h1 className="display-1 text-danger mb-3">404</h1>
      <p className="fs-3 text-secondary mb-4">Oops! Page Not Found</p>
      <a href="/" className="btn btn-primary btn-lg rounded-pill shadow">
        Go Back Home
      </a>
    </div>
  );
};

export default Nopage;
