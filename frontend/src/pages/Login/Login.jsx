import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-logo">
          <h1 className="logo-text">
            Health<span>Social</span>
          </h1>
        </div>
        <div className="login-form">
          <form>
            <input type="email" className="login-email" />
            <input type="password" className="login-password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
