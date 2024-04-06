import React, {useState} from "react";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <h3 className="heading">Login</h3>
      <form style={{ padding: "15px" }} className="outline">
        <div className="mb-3">
          <label>Username or Email address</label>
          <span className="asterik">*</span>
          <input
            type="email"
            className="form-control"
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
          <span class="toggle-password" onClick={togglePasswordVisibility}>
            <i class="fas fa-eye"></i>
          </span>
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <p className="forgot-password text-right">
          <a className="red" href="#">Lost your password?</a>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
