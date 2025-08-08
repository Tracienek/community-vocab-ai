import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-pastel">
      <div className="container">
        {/* Brand */}
        <NavLink className="navbar-brand fw-semibold" to="/">StepLingua</NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          {/* Left items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/HomePage">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/my-words">My Words</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/add-word">Add Word</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/help">Help / FAQ</NavLink></li>
          </ul>

          {/* Right items */}
          <div className="d-flex align-items-center gap-2">
            {user ? (
              <>
                <div className="nav-item">
                    <NavLink className="nav-link" to="/profile">
                        <span className="text-muted small">Hi, {user.name}</span>
                    </NavLink>
                </div>
                <button className="btn btn-outline-dark btn-sm" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <NavLink className="btn btn-outline-secondary btn-sm" to="/login">Login</NavLink>
                <NavLink className="btn btn-primary btn-sm" to="/register">Register</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
