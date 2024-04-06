import React, { useState } from "react";
import userData from "../../store/userstore";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: userData.length + 1,
      username: username,
      email: email,
      password: password
    };
    userData.push(newUser);
    console.log(userData);

    setUsername("");
    setEmail((prev)=>"");
    setPassword((prev)=>"");
    // Here you can perform further actions like sending data to your backend server
  };

  return (
    <>
      <h3 className="heading">Register</h3>
      <form style={{ padding: "15px" }} className="outline" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username</label>
          <span className="asterik">*</span>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <span className="asterik">*</span>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 password-container">
          <label>Password</label>
          <span className="asterik">*</span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <i className="fas fa-eye"></i>
          </span>
        </div>
        <p style={{ fontSize: ".8rem" }}>
          Hint: The password should be at least twelve characters long. To make
          it stronger, use upper and lower case letters, numbers, and symbols
          like ! " ? $ % ^ & ).
        </p>
        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
