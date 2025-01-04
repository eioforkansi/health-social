import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">HealthSocial</h3>
          <span className="login-desc">
            Connect with friends and the world around you on HealthSocial.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <h2 className="box-title">Login</h2>
            <input placeholder="Email" type="email" className="login-input" />
            <input
              placeholder="Password"
              type="password"
              className="login-input"
            />
            <button className="login-button" type="submit">
              Log In
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
