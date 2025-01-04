import "./Register.css";

export default function Register() {
  return (
    <div className="registeration">
      <div className="registeration-wrapper">
        <div className="registeration-left">
          <h3 className="registeration-logo">HealthSocial</h3>
          <span className="registeration-desc">
            Connect with friends and the world around you on HealthSocial.
          </span>
        </div>
        <div className="registeration-right">
          <div className="registeration-box">
            <h2 className="box-title">Register</h2>
            <input
              placeholder="First name"
              type="email"
              className="registeration-input"
            />
            <input
              placeholder="Last name"
              type="email"
              className="registeration-input"
            />
            <input
              placeholder="Email"
              type="email"
              className="registeration-input"
            />
            <input
              placeholder="Password"
              type="password"
              className="registeration-input"
            />
            <input
              placeholder="Password again"
              type="password"
              className="registeration-input"
            />
            <button className="registeration-button" type="submit">
              Sign Up
            </button>
            <span className="registeration-forgot">Forgot Password?</span>
            <button className="registeration-register-button">
              Login into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
