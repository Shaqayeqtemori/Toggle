import React, { useState } from "react";
import "./PasswordToggle.css"; 

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="container">
      <label className="label">Password:</label>
      <div className="input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          className="input"
          placeholder="Enter your password"
        />
        <button className="toggle-button" onClick={togglePassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

export default PasswordToggle;
