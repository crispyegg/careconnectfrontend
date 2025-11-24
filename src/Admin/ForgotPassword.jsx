import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  const sendOtp = () => {
    axios.post("https://careconnectbackend-7h42.onrender.com/forgotpassword", { email })
      .then((res) => {
        if (res.data.status === "success") {
          alert("OTP Sent to Email");
          setOtpSent(true);
        } else {
          alert(res.data.message);
        }
      });
  };

  const verifyOtp = () => {
    axios.post("https://careconnectbackend-7h42.onrender.com/verifyotp", { email, otp })
      .then((res) => {
        if (res.data.status === "success") {
          alert("OTP Verified");
          navigate("/resetpassword", { state: { email } });
        } else {
          alert(res.data.message);
        }
      });
  };

  return (
    <div className="container col-md-4 mt-5 shadow p-4 rounded">

      <h3 className="text-center mb-3">Forgot Password</h3>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />

      {!otpSent && (
        <button className="btn btn-primary w-100" onClick={sendOtp}>
          Send OTP
        </button>
      )}

      {otpSent && (
        <>
          <input
            type="text"
            className="form-control mt-3 mb-3"
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
          />

          <button className="btn btn-success w-100" onClick={verifyOtp}>
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
