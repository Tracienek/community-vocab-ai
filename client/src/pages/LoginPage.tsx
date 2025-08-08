import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    login({ id: '1', name: email.split('@')[0] || 'User', email }, 'demo-token');
    nav('/');
  };

  return (
    <div className="auth-wrap d-flex align-items-center justify-content-center">
      <div className="card auth-card shadow-sm">
        <div className="card-body">
          <h3 className="mb-3 text-center text-brand">Welcome back</h3>
          <p className="text-center text-muted mb-4">Sign in to Community Vocab AI</p>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Password</label>
              <div className="input-group">
                <input
                  className="form-control"
                  type={show ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShow((s) => !s)}
                >
                  {show ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label className="form-check-label" htmlFor="remember">Remember me</label>
              </div>
              <Link to="/help" className="small link-brand link-brand:hover">Forgot password?</Link>
            </div>

            <button className="btn btn-brand w-100 mb-2" type="submit">Login</button>
          </form>

          <p className="mt-3 text-center">
            No account? <Link to="/register" className="link-brand">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
