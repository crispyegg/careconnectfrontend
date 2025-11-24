import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const { state } = useLocation();
  const email = state?.email;

  const navigate = useNavigate();

  const resetPass = () => {
    if (newPassword !== confirm) {
      alert("Passwords do not match");
      return;
    }

    axios.post("https://careconnectbackend-7h42.onrender.com/resetpassword", {
      email,
      newPassword,
    }).then((res) => {
      if (res.data.status === "success") {
        alert("Password Reset Successful");
        navigate("/adminlogin");
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div className="container col-md-4 mt-5 shadow p-4 rounded">
      <h3 className="text-center mb-3">Reset Password</h3>

      <input
        type="password"
        className="form-control mb-3"
        placeholder="New Password"
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Confirm Password"
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button className="btn btn-primary w-100" onClick={resetPass}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
