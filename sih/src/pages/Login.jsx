import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Login({ onLogin }) {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onLogin) onLogin();
        }}
      >
        <input type="text" placeholder="Phone or Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
