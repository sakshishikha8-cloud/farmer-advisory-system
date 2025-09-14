import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Signup({ onSignup }) {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (onSignup) onSignup();
        }}
      >
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Phone or Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
